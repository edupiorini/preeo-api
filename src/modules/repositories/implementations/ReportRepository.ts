import { Report } from "../../models/Report";
import { Survey } from "../../models/Survey";
import { IReportRepository } from "../IReportRepository";
import { ISurveysRepository } from "../ISurveysRepository";
import { SurveysRepository } from "./SurveysRepository";

export class ReportRepository implements IReportRepository {
    private report: Report;

    constructor(private surveyRepository: ISurveysRepository) {
        this.report = new Report();
    }

    generate(): Report {
        this.report = {
            adolescents: 1,
            firstTimers: 1,
            targetables: 1,
            unlicensed: 1
        }
        return this.report;

    }

    private setAdolescents(surveyRepository: ISurveysRepository): number {
        surveyRepository = this.surveyRepository;
        const surveysList = surveyRepository.list();

        const adolescentes = surveysList.map(survey => survey.age)
        return adolescents;

    }
}
