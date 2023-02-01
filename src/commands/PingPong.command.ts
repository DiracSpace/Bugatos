import { ICommand } from '@/model'

export const PING_PONG: ICommand = {
    name: 'Ping Pong',
    description: 'Prints "pong"',
    hidden: false,
    disabled: false,
    action: (_, message) => {
        message.channel.send('pong')
    }
}
