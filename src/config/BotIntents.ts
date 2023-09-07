import { GatewayIntentBits, Partials } from 'discord.js'

export const BOT_INTENTS = [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildVoiceStates,
]

export const BOT_PARTIALS = [Partials.Channel]
