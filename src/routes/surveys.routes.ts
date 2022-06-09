import { Router } from "express";
import { createSurveController } from "../services/useCases/createSurvey";

export const surveysRoutes = Router();


surveysRoutes.post('/', (request, response) => {

    return createSurveController.handle(request, response);
})
