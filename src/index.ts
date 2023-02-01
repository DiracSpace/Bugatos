import { BOT_INTENTS, BOT_PARTIALS, DISCORD_TOKEN, PREFIX } from '@/config'
import { extractCommandDetails } from '@/utils'
import { Client, Message } from 'discord.js'
import { Logger, LogLevel } from '@/logger'
import { PING_PONG, ALL } from '@/commands'
import { JOIN_VOICE_CHANNEL } from './commands/Join.command'
import { SACALO } from './commands/Sacalo.command'

const client = new Client({ intents: BOT_INTENTS, partials: BOT_PARTIALS })
const logger = new Logger({
    level: LogLevel.Debug,
    source: 'index.ts'
})

client.on('ready', () => {
    logger.log('client.user.tag:', client.user.tag)
})

client.on('messageCreate', (message: Message<boolean>) => {
    if (message.author.bot) {
        logger.warn('Author is a bot')
        return
    }

    if (!message.content.startsWith(PREFIX)) {
        logger.log("Message isn't a command")
        return
    }

    logger.log('Processing command')

    const { command, commandArguments } = extractCommandDetails(message.content);
    logger.log("command:", command);
    logger.log("commandArguments:", commandArguments);

    if (command === 'ping') {
        logger.log('Ping command')
        PING_PONG.action({ message })
    }

    if (command === 'all') {
        ALL.action({ message })
    }

    if (command === 'join') {
        JOIN_VOICE_CHANNEL.action({ message })
    }

    if (command === 'sacalo') {
        SACALO.action({ message })
    }
})

client.login(DISCORD_TOKEN())
