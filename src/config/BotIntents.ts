import { GatewayIntentBits, IntentsBitField } from 'discord.js'

export const BOT_INTENTS = [
    GatewayIntentBits.Guilds,
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMessages
]
