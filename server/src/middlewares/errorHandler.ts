import { Response } from "express";

export default function errorHandler(err: unknown, {}, res: Response, {}) {
  const statusCode = err instanceof ErrorWithStatus ? err.statusCode : 500;
  const message = err instanceof Error ? err.message : "Internal server error";

  res.status(statusCode).json({ message: message });
}

class ErrorWithStatus extends Error {
  statusCode: number;
  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
  }
}
