/**
 * Blog Service
 *
 * Description:
 * Handles functionalities related to Building-U resources.
 */

import { logger } from "@utils/Logger";
import { handleHttpError } from "@utils/handleError";

export async function getPrograms() {
  try {
  } catch (error: any) {
    throw handleHttpError(error, "getPrograms service error.");
  }
}

export async function getOpps() {
  try {
  } catch (error: any) {
    throw handleHttpError(error, "getOpps service error.");
  }
}

export async function getComps() {
  try {
  } catch (error: any) {
    throw handleHttpError(error, "getComps service error.");
  }
}
