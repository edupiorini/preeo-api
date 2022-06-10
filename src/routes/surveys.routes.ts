import { Router } from "express";
import { createSurveController } from "../services/useCases/createSurvey";
import { listSurveysController } from "../services/useCases/listSurveys/indext";

export const surveysRoutes = Router();


surveysRoutes.post('/', (request, response) => {

    return createSurveController.handle(request, response);
})

surveysRoutes.get('/', (request, response) => {

    return listSurveysController.handle(request, response);
})
