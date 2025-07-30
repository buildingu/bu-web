/**
 * Partner Controller
 * 
 * Description:
 * Handles Building-U resource related HTTP requests and responses.
 */

import type { Request, Response, NextFunction } from "express";

import { logger } from "@utils/Logger";
import { handleHttpError } from "@utils/handleError";

import * as resourcesService from "@resourcesFeat/services/resourcesService";

export async function getPrograms( 
  req: Request,
  res: Response,
  next: NextFunction
) {
  logger.debug("/auth/register body:", req.body);

  try {
    return res.status(200).json({
      message: ""
    });
  } catch (error: any) {
    next(handleHttpError(error, "getPrograms controller error."));
  }
}

export async function getOpps(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    return res.status(200).json({
      message: ""
    });
  } catch (error: any) {
    next(handleHttpError(error, "getOpps controller error."));
  }
}

export async function getComps(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    return res.status(200).json({
      message: ""
    });
  } catch (error: any) {
    next(handleHttpError(error, "getComps controller error."));
  }
}
