import { NotFoundError } from "openai/error";

export const isNotFoundError = (error: unknown): error is NotFoundError => {
  return error instanceof NotFoundError;
}