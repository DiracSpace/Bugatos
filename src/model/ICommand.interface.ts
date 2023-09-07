import { Message } from 'discord.js'

export interface ICommand {
    name: string
    description: string
    hidden: boolean
    disabled: boolean
    action: (config: Message<boolean>) => void
}
