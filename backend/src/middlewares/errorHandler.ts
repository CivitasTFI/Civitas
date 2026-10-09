import { NextFunction, Request, Response } from "express";
import { errorResponse } from "../utils/httpResponse";
import { AppError } from "../utils/AppError";

export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json(
      errorResponse(
        err.code,
        err.message,
        err.details
      )
    );
  }

  console.error(err);

  return res.status(500).json(
    errorResponse(
      "INTERNAL_SERVER_ERROR",
      "Error interno del servidor"
    )
  );
}
