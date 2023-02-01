import { GatewayIntentBits, IntentsBitField, Partials } from 'discord.js'

export const BOT_INTENTS = [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.DirectMessages,
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent
]

export const BOT_PARTIALS = [Partials.Channel]