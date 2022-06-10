import { Survey } from "../../../modules/models/Survey";
import { ISurveysRepository } from "../../../modules/repositories/ISurveysRepository";

export class ListSurveysUseCase {
    constructor(private surveysRepository: ISurveysRepository) { }

    execute(): Survey[] {
        const surveys = this.surveysRepository.list();

        return surveys;
    }
}
