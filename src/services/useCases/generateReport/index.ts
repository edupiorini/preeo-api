import { ReportRepository } from "../../../modules/repositories/implementations/ReportRepository";
import { SurveysRepository } from "../../../modules/repositories/implementations/SurveysRepository";
import { ListSurveysUseCase } from "../listSurveys/listSurveysUseCase";
import { GenerateReportController } from "./GenerateReportController";
import { GenerateReportUseCase } from "./GenerateReportUseCase";

const surveyRepository = SurveysRepository.getInstance();

const reportRepository = new ReportRepository(surveyRepository);
const generateReportUseCase = new GenerateReportUseCase(reportRepository);

export const generateReportController = new GenerateReportController(generateReportUseCase);  
