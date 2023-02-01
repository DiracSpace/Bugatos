import { IConfig } from '@/model/IConfig.interface'
import { ICommand } from '@/model'

export const PING_PONG: ICommand<IConfig> = {
    name: 'Ping Pong',
    description: 'Prints "pong"',
    hidden: false,
    disabled: false,
    action: ({ message }) => {
        message.channel.send(
            `Pong! This message was sent by ${message.author.username}.`
        )
    }
}
