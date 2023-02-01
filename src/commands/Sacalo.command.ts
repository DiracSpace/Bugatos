import { ICommand, IConfig } from "@/model";


export const SACALO: ICommand<IConfig> = {
    name: 'Sacalo',
    description: 'Se lo saca para que te lo comas',
    hidden: false,
    disabled: false,
    action: ({ message }) => {
        message.channel.send(`${message.author.username}, has pedido comértelo entero :eggplant: :hot_face:`)
    }
}