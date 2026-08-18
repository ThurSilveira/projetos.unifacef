import { AppError } from "./AppError";
import { Request, Response, NextFunction } from "express";

export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof AppError) {
    return res.status(err.statusCode)
      .json({ message: err.message });
  }
  console.error(err);
  return res.status(500)
    .json({ message: "Erro interno" });
}