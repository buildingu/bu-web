/**
 * Blog HTTP Routes
 */

import { Router } from "express";
import * as blogController from "@blogFeat/controllers/blogController";

const router = Router();

router.get("/articles", blogController.getBlogs);

export default router;
