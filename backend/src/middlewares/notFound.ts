import { Request, Response } from "express";
import { errorResponse } from "../utils/httpResponse";

export function notFound(req: Request, res: Response) {
  res.status(404).json(
    errorResponse(
      "NOT_FOUND",
      `Ruta no encontrada: ${req.method} ${req.originalUrl}`
    )
  );
}
