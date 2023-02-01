import { Logger, LogLevel } from '@/logger'
import { ICommand, IConfig } from '@/model'
import { joinVoiceChannel } from '@discordjs/voice'

const logger = new Logger({
    level: LogLevel.Debug,
    source: 'JoinCommands'
})

export const JOIN_VOICE_CHANNEL: ICommand<IConfig> = {
    name: 'Join voice channel',
    description: 'Joins specified voice channel',
    hidden: false,
    disabled: false,
    action: ({ message }) => {
        logger.log('Trying to join channel')

        try {
            joinVoiceChannel({
                channelId: message.channelId,
                guildId: message.guildId,
                adapterCreator: message.guild.voiceAdapterCreator
            })
        } catch (error) {
            logger.log('Could not join voice channel')
        }
    }
}
