/**
 * Authentication Controller
 * 
 * Description:
 * Handles user and or authentication-related HTTP requests and responses.
 */

import type { Request, Response, NextFunction } from "express";

import RegisterRequestDto from "@authFeat/dtos/RegisterRequestDto";
import { LoginRequestDto } from "@authFeat/dtos/LoginRequestDto";

import { logger } from "@utils/Logger";
import { handleHttpError } from "@utils/handleError";

import * as authService from "@authFeat/services/authService";

export async function register( 
  req: RegisterRequestDto,
  res: Response,
  next: NextFunction
) {
  logger.debug("/auth/register body:", req.body);

  try {
    await authService.registerUser(null);

    return res.status(200).json({
      message: ""
    });
  } catch (error: any) {
    next(handleHttpError(error, "register controller error."));
  }
}

export async function login(
  req: LoginRequestDto,
  res: Response,
  next: NextFunction
) {
  try {
    return res.status(200).json({
      message: "",
      user: null
    });
  } catch (error: any) {
    next(handleHttpError(error, "login controller error."));
  }
}
