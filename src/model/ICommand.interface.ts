import { IConfig } from './IConfig.interface'

export interface ICommand<TConfig extends IConfig> {
    name: string
    description: string
    hidden: boolean
    disabled: boolean
    action: (config?: TConfig) => void
}
