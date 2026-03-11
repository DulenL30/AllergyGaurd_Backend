import { Router } from "express";
import { addAllergy } from "../controllers/allergy.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = Router();
router.post("/", addAllergy);
export default router;
