import * as dotenv from 'dotenv'
dotenv.config()

import { CacheType, Client, GatewayIntentBits, Interaction } from 'discord.js'

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

const { DISCORD_TOKEN } = process.env
if (!DISCORD_TOKEN || !DISCORD_TOKEN.trim()) {
    throw new Error(`Cannot get property ${DISCORD_TOKEN}`)
}

client.login(DISCORD_TOKEN)
