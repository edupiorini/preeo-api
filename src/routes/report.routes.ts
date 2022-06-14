import { Router } from "express";
import { SurveysRepository } from "../modules/repositories/implementations/SurveysRepository";
import { generateReportController } from "../services/useCases/generateReport";

export const reportRoute = Router();



reportRoute.get('/', (request, response) => {

    return generateReportController.handle(request, response);

})
