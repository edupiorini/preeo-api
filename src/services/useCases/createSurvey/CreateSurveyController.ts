import { Request, Response } from "express";
import { CreateSurveyUseCase } from "./CreateSurveyUseCase";

export class CreateSurveyController {
    constructor(private createSurveyUseCase: CreateSurveyUseCase) { }

    handle(request: Request, response: Response): Response {
        const { age,
            driveTrainType,
            gender,
            hasDrivingLicense,
            isFirstCar,
            isFuelEmissionWorried,
            numberOfCars } = request.body;

        this.createSurveyUseCase.execute({
            age,
            driveTrainType,
            gender,
            hasDrivingLicense,
            isFirstCar,
            isFuelEmissionWorried,
            numberOfCars
        });

        return response.status(201).send({ message: "Survey has been created!" });

    }
}
