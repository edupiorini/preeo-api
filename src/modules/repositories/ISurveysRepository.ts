export interface ISurveysRepositoryDTO {
    gender: string;
    age: number;
    hasDrivingLicense: boolean;
    driveTrainType: string;
    isFirstCar: boolean;
    isFuelEmissionWorried: boolean;
    numberOfCars: number;
    cars?: Array<Object>;
}

export interface ISurveysRepository {
    create({
        age,
        driveTrainType,
        gender,
        hasDrivingLicense,
        isFirstCar,
        isFuelEmissionWorried,
        numberOfCars,
        cars,
    }: ISurveysRepositoryDTO): void;
}
