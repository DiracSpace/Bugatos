import { CacheType, Client, GatewayIntentBits, Interaction } from 'discord.js'
import { DISCORD_TOKEN } from './config'

const client = new Client({ intents: [GatewayIntentBits.Guilds] })

client.on('ready', () => {
    console.info(`Logged in as ${client.user.tag}`)
})

client.on('interactionCreate', async (interaction: Interaction<CacheType>) => {
    if (!interaction.isChatInputCommand()) return
    if (interaction.commandName === 'ping') {
        await interaction.reply('Pong!')
    }
})

client.login(DISCORD_TOKEN())
