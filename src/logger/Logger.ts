import { GlobalLoggerConfig } from './GlobalILogger.config'
import { LogLevel } from './LogLevel.enum'

export type LoggerOptions = {
    source?: string
    level?: LogLevel
}

/**
 * Simple logger system with the possibility of registering custom outputs.
 *
 * 4 different log levels are provided, with corresponding methods:
 * - debug   : for debug information
 * - info    : for informative status of the application (success, ...)
 * - warning : for non-critical errors that do not prevent normal application behavior
 * - error   : for critical errors that prevent normal application behavior
 *
 * Example usage:
 * ```
 * import { Logger } from 'app/core/logger.service';
 *
 * const log = new Logger('myFile');
 * ...
 * log.debug('something happened');
 * ```
 *
 * To disable debug and info logs in production, add this snippet to your root component:
 * ```
 * export class AppComponent implements OnInit {
 *   ngOnInit() {
 *     if (environment.production) {
 *       Logger.enableProductionMode();
 *     }
 *     ...
 *   }
 * }
 *
 * If you want to process logs through other outputs than console, you can add LogOutput functions to Logger.outputs.
 */
export class Logger {
    private source?: string
    private level?: LogLevel

    constructor(options?: LoggerOptions) {
        this.source = options?.source
        this.level = options?.level
    }

    log(...objects: any[]) {
        if (this.level != undefined && this.level != null)
            this._log(this.level, objects)
        else if (
            GlobalLoggerConfig.level != undefined &&
            GlobalLoggerConfig.level != null
        )
            this._log(GlobalLoggerConfig.level, objects)
        else this._log(LogLevel.Debug, objects)
    }

    /**
     * Logs messages or objects with the debug level.
     * Works the same as console.log().
     */
    debug(...objects: any[]) {
        this._log(LogLevel.Debug, objects)
    }

    /**
     * Logs messages or objects with the info level.
     * Works the same as console.info().
     */
    info(...objects: any[]) {
        this._log(LogLevel.Info, objects)
    }

    /**
     * Logs messages or objectswith the warning level.
     * Works the same as console.warning().
     */
    warn(...objects: any[]) {
        this._log(LogLevel.Warning, objects)
    }

    /**
     * Logs messages or objects with the error level.
     * Works the same as console.error().
     */
    error(...objects: any[]) {
        this._log(LogLevel.Error, objects)
    }

    private _log(level: LogLevel, objects: any[]) {
        if (level == LogLevel.Off) return

        if (this.source && GlobalLoggerConfig.hasIgnoreSource(this.source)) {
            return
        }

        const log = this.buildLogParts(objects)

        if (level == LogLevel.Debug) console.log(...log)
        else if (level == LogLevel.Info) console.info(...log)
        else if (level == LogLevel.Warning) console.warn(...log)
        else if (level == LogLevel.Error) console.error(...log)
    }

    private buildLogParts(objects: any[]): string[] {
        const now = new Date()

        const nowStr = 'HH:MM:SS:mm'
            .replace('HH', now.getHours().toString().padStart(2, '0'))
            .replace('MM', now.getMinutes().toString().padStart(2, '0'))
            .replace('SS', now.getSeconds().toString().padStart(2, '0'))
            .replace('mm', now.getMilliseconds().toString().substring(0, 2))

        let log = [`[${nowStr}]`]

        if (this.source) log.push(`[${this.source}]`)

        log = [...log, ...objects]

        return log
    }
}
