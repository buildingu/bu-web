/**
 * Authentication Service
 *
 * Description:
 * Handles functionalities related to user authentication and management.
 */

import { logger } from "@utils/Logger";
import { handleHttpError } from "@utils/handleError";

export async function registerUser(user: any) {
  try {
    // logger.info(`User ${userId} was successfully registered in the database.`);
  } catch (error: any) {
    throw handleHttpError(error, "registerUser service error.");
  }
}