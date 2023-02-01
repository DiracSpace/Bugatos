import { dotenv } from '.'
import { EnvironmentNames } from './EnvNames.type'
dotenv.config()

const checkOrThrow = (text: string, environmentName: EnvironmentNames) => {
    if (!text || !text.trim()) {
        throw new Error(`Cannot get property ${environmentName}`)
    }

    return text
}

export const DISCORD_TOKEN = (): string => {
    return checkOrThrow(process.env.DISCORD_TOKEN, 'DISCORD_TOKEN')
}

export const DISCORD_CLIENT_SECRET = (): string => {
    return checkOrThrow(
        process.env.DISCORD_CLIENT_SECRET,
        'DISCORD_CLIENT_SECRET'
    )
}

export const DISCORD_CLIENT_ID = (): string => {
    return checkOrThrow(process.env.DISCORD_CLIENT_ID, 'DISCORD_CLIENT_ID')
}

export const DISCORD_APPLICATION_ID = (): string => {
    return checkOrThrow(
        process.env.DISCORD_APPLICATION_ID,
        'DISCORD_APPLICATION_ID'
    )
}

export const DISCORD_PUBLIC_KEY = (): string => {
    return checkOrThrow(process.env.DISCORD_PUBLIC_KEY, 'DISCORD_PUBLIC_KEY')
}
