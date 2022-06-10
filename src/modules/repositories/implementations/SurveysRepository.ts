import { Survey } from "../../models/Survey";
import { ISurveysRepository, ISurveysRepositoryDTO } from "../ISurveysRepository";

export class SurveysRepository implements ISurveysRepository {
    private surveys: Survey[];

    private static INSTANCE: SurveysRepository;

    private constructor() {
        this.surveys = [];
    }

    public static getInstance() {
        if (!SurveysRepository.INSTANCE) {
            SurveysRepository.INSTANCE = new SurveysRepository();
        }

        return SurveysRepository.INSTANCE;
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

    }

    list(): Survey[] {
        console.log(this.surveys);
        return this.surveys;
    }



}
