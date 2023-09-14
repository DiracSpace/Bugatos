import 'reflect-metadata'
import { BOT_INTENTS, BOT_PARTIALS, PREFIX } from './config'
import { JOIN_VOICE_CHANNEL } from './commands/Join.command'
import { Client, Events, Message } from 'discord.js'
import { SACALO } from './commands/Sacalo.command'
import { extractCommandDetails } from './utils'
import { TomasLogger } from '@tomasjs/logging'
import { PING_PONG, ALL } from './commands'
import 'dotenv/config'
import { CHATGPT } from './commands/ChatGpt.command'

const logger = new TomasLogger('main', 'debug')
async function main() {
    logger.info('Preparing client')
    const client = new Client({ intents: BOT_INTENTS, partials: BOT_PARTIALS })
    client.login(process.env.DISCORD_TOKEN)

    client.on(Events.ClientReady, () => {
        if (!client.user) {
    
            return;
        }
    
        logger.info('Client ready!')
        logger.info(`client.user.tag: ${client.user.tag}`)
    })
    
    client.on(Events.MessageCreate, (message: Message<boolean>) => {
        if (message.author.bot) {
            logger.warn('Author is a bot')
            return
        }
    
        if (!message.content.startsWith(PREFIX)) {
            logger.info("Message isn't a command")
            return
        }
    
        logger.info('Processing command')
    
        const command = extractCommandDetails(message.content)
        
        if (!command) {
            return;
        }
    
        logger.info(`command: ${command}`)
        logger.info(`command.commandArguments: ${command.commandArguments}`)
    
        if (command.command === 'ping') {
            logger.info('Ping command')
            PING_PONG.action(message)
        }
    
        if (command.command === 'all') {
            ALL.action(message)
        }
    
        if (command.command === 'join') {
            JOIN_VOICE_CHANNEL.action(message)
        }
    
        if (command.command === 'sacalo') {
            SACALO.action(message)
        }

        if (command.command === 'ask') {
            CHATGPT.action(message)
        }
    })
}

main()
