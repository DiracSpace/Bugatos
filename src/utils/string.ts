import { PREFIX } from "@/config";
import { IMessageCommand } from "@/model";

export function extractCommandDetails(content: string): IMessageCommand | undefined {
    if (!content || !content.trim()) {
        return undefined
    }

    const commandBody = content.slice(PREFIX.length)
    const args = commandBody.split(' ')
    const command = args.shift().toLowerCase()

    return {
        command: command,
        commandArguments: args
    }
}