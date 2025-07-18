/**
 * Authentication HTTP Routes
 */

import { Router } from "express";
import * as authController from "@authFeat/controllers/authController";

const router = Router();

router.post("/register", authController.register);

router.post("/login", authController.login);

// router.post("/email-verify", authController.emailVerify);
// router.post("/email-verify/send", authController.sendVerifyEmail);

// router.get("/user/profile", verifyUserToken, authController.getUserProfile);
// router.patch("/user", authController.updateProfile);

// router.patch("/user/reset-password", authController.resetPassword);
// router.post("/user/reset-password/forgot", authController.sendForgotPasswordEmail);

// router.post("/user/logout", authController.logout);

export default router;
