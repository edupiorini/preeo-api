import { Survey } from "../../models/Survey";
import { ISurveysRepository, ISurveysRepositoryDTO } from "../ISurveysRepository";

export class SurveysRepository implements ISurveysRepository {
    private surveys: Survey[];

    constructor() {
        this.surveys = [];
    }

    create({
        age,
        driveTrainType,
        gender,
        hasDrivingLicense,
        isFirstCar,
        isFuelEmissionWorried,
        numberOfCars,
        cars,
    }: ISurveysRepositoryDTO): void {

        const survey = new Survey();


        Object.assign(survey, {
            age,
            driveTrainType,
            gender,
            hasDrivingLicense,
            isFirstCar,
            isFuelEmissionWorried,
            numberOfCars,
            cars,
            createdAt: new Date(),
        });

        this.surveys.push(survey);

        console.log(this.surveys);
    }


}
