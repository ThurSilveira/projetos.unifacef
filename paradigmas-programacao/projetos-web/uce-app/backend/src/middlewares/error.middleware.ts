import type { ErrorRequestHandler, RequestHandler } from "express";
import type { ErrorResponse } from "../types/http.js";

export const notFoundHandler: RequestHandler<
  Record<string, never>,
  ErrorResponse
> = (_request, response) => {
  response.status(404).json({ message: "Rota não encontrada." });
};

export const errorHandler: ErrorRequestHandler = (
  error: unknown,
  _request,
  response,
  next,
) => {
  if (response.headersSent) {
    next(error);
    return;
  }

  console.error(error);
  response.status(500).json({ message: "Erro interno do servidor." });
};
