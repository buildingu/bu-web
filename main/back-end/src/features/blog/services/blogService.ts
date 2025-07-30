/**
 * Blog Service
 *
 * Description:
 * Handles functionalities related to blogs.
 */

import { logger } from "@utils/Logger";
import { handleHttpError } from "@utils/handleError";

export async function getBlogs() {
  try {
  } catch (error: any) {
    throw handleHttpError(error, "getBlogs service error.");
  }
}