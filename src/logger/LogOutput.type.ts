import { LogLevel } from './LogLevel.enum'

/**
 * Log output handler function.
 */
export type LogOutput = (
    source: string | undefined,
    level: LogLevel,
    ...objects: any[]
) => void
