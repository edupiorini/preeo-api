import { SurveysRepository } from "../../../modules/repositories/implementations/SurveysRepository";
import { CreateSurveyController } from "./CreateSurveyController";
import { CreateSurveyUseCase } from "./CreateSurveyUseCase";

const surveysRepository = SurveysRepository.getInstance();
const createSurveyUseCase = new CreateSurveyUseCase(surveysRepository);

export const createSurveController = new CreateSurveyController(createSurveyUseCase);    
