import { Response, Request } from "express";
import { GenerateReportUseCase } from "./GenerateReportUseCase";

export class GenerateReportController {
    constructor(private generateReportUseCase: GenerateReportUseCase) { }

    handle(request: Request, response: Response): Response {
        const report = this.generateReportUseCase.execute();

        return response.json(report);
    }
}
