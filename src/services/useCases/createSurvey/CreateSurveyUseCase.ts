import { ISurveysRepository } from "../../../modules/repositories/ISurveysRepository";

interface IRequest {
    age: number;
    driveTrainType: string;
    gender: string;
    hasDrivingLicense: boolean;
    isFirstCar: boolean;
    isFuelEmissionWorried: boolean;
    numberOfCars: number;
    cars?: Array<Object>;
}
export class CreateSurveyUseCase {
    constructor(private surveysRepository: ISurveysRepository) { }

    execute({
        age,
        driveTrainType,
        gender,
        hasDrivingLicense,
        isFirstCar,
        isFuelEmissionWorried,
        numberOfCars
    }: IRequest) {

        this.surveysRepository.create({
            age,
            driveTrainType,
            gender,
            hasDrivingLicense,
            isFirstCar,
            isFuelEmissionWorried,
            numberOfCars
        })
    }
}
