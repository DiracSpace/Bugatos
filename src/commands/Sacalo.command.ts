import { ICommand } from '@/model'
import { Message } from 'discord.js'

export const SACALO: ICommand = {
    name: 'Sacalo',
    description: 'Se lo saca para que te lo comas',
    hidden: false,
    disabled: false,
    action: (message: Message<boolean>) => {
        message.channel.send(
            `${message.author.username}, has pedido comértelo entero :eggplant: :hot_face:`
        )
    }
}
