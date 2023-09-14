import { TomasLogger } from "@tomasjs/core";
import { isNotFoundError } from "@/guards";
import { Message } from "discord.js";
import { ICommand } from "@/model";
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_SECRET
})

const logger = new TomasLogger("ChatGPT Command", "debug")


export const CHATGPT: ICommand = {
  name: 'Pregúntale a ChatGPT',
  description: 'Hazle una pregunta a ChatGPT',
  hidden: false,
  disabled: false,
  action: async (message: Message<boolean>) => {
    try {
      logger.info(
        `Message from ${message.author.username} asking ${message.content}`
      )

      const completion = await openai.chat.completions.create({
        messages: [
          {
            role: 'assistant',
            content: message.content,
          }
        ],
        model: 'gpt-4'
      })

      logger.info(
        `Obtained the following response: ${completion.choices}`
      )

      message.channel.send(
        `The response of ${message.author.username} question is ${completion.choices}`
      )
    }
    catch (error: unknown) {
      if (isNotFoundError(error)) {
        message.channel.send(
          `Uh oh! This came back -> ${error.message}`
        )
      }

      logger.error(error)
    }
  }
}