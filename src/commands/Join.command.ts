import { joinVoiceChannel } from '@discordjs/voice'
import { TomasLogger } from '@tomasjs/logging'
import { Message } from 'discord.js'
import { ICommand } from '@/model'

const logger = new TomasLogger("JoinCommand", "debug")

export const JOIN_VOICE_CHANNEL: ICommand = {
    name: 'Join voice channel',
    description: 'Joins specified voice channel',
    hidden: false,
    disabled: false,
    action: (message: Message<boolean>) => {
        logger.info("message:", message);
        
        if (!message.guildId) {
            logger.error('Could not obtain guild ID')
            return;
        }

        if (!message.guild) {
            logger.error('Could not obtain guild')
            return;
        }

        const voiceChannel = message.member?.voice.channel;

        if (!voiceChannel) {
            logger.error('Could not obtain channel')
            return;
        }

        try {
            joinVoiceChannel({
                channelId: voiceChannel.id,
                guildId: voiceChannel.guild.id,
                adapterCreator: voiceChannel.guild.voiceAdapterCreator,
                selfDeaf: false,
            })
        } catch (error) {
            logger.error("error:", error);
        }
    }
}
