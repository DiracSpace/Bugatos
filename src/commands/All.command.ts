import { JOIN_VOICE_CHANNEL } from './Join.command'
import { PING_PONG } from './PingPong.command'
import { SACALO } from './Sacalo.command'
import { Message } from 'discord.js'
import { ICommand } from '@/model'
import { PREFIX } from '@/config'

export const ALL: ICommand = {
    name: 'Commands',
    description: 'Displays all available commands',
    hidden: false,
    disabled: false,
    action: (message: Message<boolean>) => {
        if (!message) {
            return 
        }

        let textToSend = `Use each command with the prefix \`${PREFIX}\`\n`
        ALL_COMMANDS.forEach((value, key) => {
            if (!value.hidden && !value.disabled) {
                textToSend += `\n\`${key}\`` + ' - ' + value.description
            }
        })

        message.channel.send(textToSend)
    }
}

const ALL_COMMANDS: Map<string, ICommand> = new Map()
ALL_COMMANDS.set('join', JOIN_VOICE_CHANNEL)
ALL_COMMANDS.set('ping', PING_PONG)
ALL_COMMANDS.set('sacalo', SACALO)
ALL_COMMANDS.set('all', ALL)
