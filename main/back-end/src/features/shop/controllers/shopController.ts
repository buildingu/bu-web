/**
 * Partner Controller
 * 
 * Description:
 * Handles U-Shop related HTTP requests and responses.
 */

import type { Request, Response, NextFunction } from "express";

import { logger } from "@utils/Logger";
import { handleHttpError } from "@utils/handleError";

import * as shopService from "@shopFeat/services/shopService";
