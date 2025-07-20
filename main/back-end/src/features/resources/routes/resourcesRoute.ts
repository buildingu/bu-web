/**
 * Resources (Programs, Opportunities, Contest/Challenges) HTTP Routes
 */

import { Router } from "express";
import * as resourcesController from "@resourcesFeat/controllers/resourcesController";

const router = Router();

router.get("/programs", resourcesController.getPrograms);

router.get("/opps", resourcesController.getOpps); // Opportunities

router.get("/comps", resourcesController.getComps); // Contest/Challenges

export default router;
