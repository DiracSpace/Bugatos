import { Client, Message } from 'discord.js'

export interface ICommand {
    name: string
    description: string
    hidden: boolean
    disabled: boolean
    action: (client: Client, message: Message, args?: string[]) => void
}
