import { PING_PONG } from './PingPong.command'
import { ICommand } from '@/model'

const ALL_COMMANDS: Map<string, ICommand> = new Map()
ALL_COMMANDS.set('ping', PING_PONG)
