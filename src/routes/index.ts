import { Router } from "express";
import { reportRoute } from "./report.routes";
import { surveysRoutes } from "./surveys.routes";

export const router = Router();

router.use('/surveys', surveysRoutes);
router.use('/report', reportRoute);
