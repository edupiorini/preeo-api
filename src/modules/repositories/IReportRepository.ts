import { Report } from "../models/Report";

export interface IReportRepositoryDTO {
    adolescents: number;
    unlicensed: number;
    firstTimers: number;
    targetables: number;
}

export interface IReportRepository {
    generate(): Report;
}
