import { SurveysRepository } from "../../../modules/repositories/implementations/SurveysRepository";
import { ListSurveysController } from "./ListSurveysController";
import { ListSurveysUseCase } from "./listSurveysUseCase";

const surveysRepository = SurveysRepository.getInstance();
const listSurveysUseCase = new ListSurveysUseCase(surveysRepository);

export const listSurveysController = new ListSurveysController(listSurveysUseCase);
