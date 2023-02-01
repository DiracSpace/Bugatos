import { CacheType, Client, Interaction, Message } from 'discord.js'
import { BOT_INTENTS, BOT_PARTIALS, DISCORD_TOKEN, PREFIX } from './config'

const client = new Client({ intents: BOT_INTENTS, partials: BOT_PARTIALS })

client.on('ready', () => {
    console.info(`Logged in as ${client.user.tag}`)
})

client.on('interactionCreate', async (interaction: Interaction<CacheType>) => {
    if (!interaction.isChatInputCommand()) return
    if (interaction.commandName === 'ping') {
        await interaction.reply('Pong!')
    }
})

client.on('messageCreate', (message: Message<boolean>) => {
    console.log('message!')
    console.log('message.content:', message.content)

    if (message.author.bot) {
        console.log("author's a bot.")
        return
    }

    if (!message.content.startsWith(PREFIX)) {
        console.log("message content isn't a command.")
        return
    }

    console.log('processing command')

    const commandBody = message.content.slice(PREFIX.length)
    const args = commandBody.split(' ')
    const command = args.shift().toLowerCase()

    console.log('commandBody:', commandBody)
    console.log('args:', args)
    console.log('command:', command)

    if (command === 'ping') {
        console.log('Inside ping')
        message.reply(
            `Pong! This message was sent by ${message.author.username}.`
        )
    }
})

client.login(DISCORD_TOKEN())
