/**
 * Partner Controller
 * 
 * Description:
 * Handles connecting/sponsoring related HTTP requests and responses.
 */

import type { Request, Response, NextFunction } from "express";

import { logger } from "@utils/Logger";
import { handleHttpError } from "@utils/handleError";

import * as partnerService from "@partnerFeat/services/partnerService";
