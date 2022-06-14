import { Report } from "../../../modules/models/Report";
import { IReportRepository } from "../../../modules/repositories/IReportRepository";

export class GenerateReportUseCase {
    constructor(private reportRepository: IReportRepository) { }

    execute(): Report {
        const report = this.reportRepository.generate();

        return report;
    }
}
