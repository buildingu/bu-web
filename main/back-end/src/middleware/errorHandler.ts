import type { Request, Response, NextFunction } from "express";
import { logger } from "@utils/Logger";
import { ApiError } from "@utils/handleError";

export default function errorHandler(
  error: ApiError | Error,
  _: Request,
  res: Response,
  __: NextFunction
) {
  const err: any = error;

  if (
    err.statusCode === 500 ||
    // err.message?.toLowerCase().includes("unexpectedly") ||
    !err.statusCode
  )
    logger.error(err.stack || err);

  return res.status(err.statusCode || 500).json({
    name: err.name,
    ...(process.env.NODE_ENV === "development" && {
      message: err.from || "unknown"
    }),
    ERROR: err.message || "An unexpected error occurred."
  });
}
