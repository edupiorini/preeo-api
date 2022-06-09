import { Router } from "express";
import { surveysRoutes } from "./surveys.routes";

export const router = Router();

router.use('/surveys', surveysRoutes);
