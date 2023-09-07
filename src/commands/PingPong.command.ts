import { Message } from 'discord.js'
import { ICommand } from '@/model'

export const PING_PONG: ICommand = {
    name: 'Ping Pong',
    description: 'Prints "pong"',
    hidden: false,
    disabled: false,
    action: (message: Message<boolean>) => {
        message.channel.send(
            `Pong! This message was sent by ${message.author.username}.`
        )
    }
}
