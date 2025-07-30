/**
 * Blog Controller
 * 
 * Description:
 * Handles blog related HTTP requests and responses.
 */

import type { Request, Response, NextFunction } from "express";

import { logger } from "@utils/Logger";
import { handleHttpError } from "@utils/handleError";

import * as blogService from "@blogFeat/services/blogService";

export async function getBlogs( 
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    return res.status(200).json({
      message: ""
    });
  } catch (error: any) {
    next(handleHttpError(error, "getBlogs controller error."));
  }
}
