import { Client, Message } from 'discord.js'

export interface IConfig {
    client?: Client
    message: Message
    args?: string[]
}
