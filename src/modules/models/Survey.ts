import { v4 as uuidv4 } from 'uuid';
export class Survey {
    id: string;
    gender!: string;
    age!: number;
    hasDrivingLicense!: boolean;
    driveTrainType!: string;
    isFirstCar!: boolean;
    isFuelEmissionWorried!: boolean;
    numberOfCars!: number;
    cars?: Array<Object>;

    constructor() {
        this.id = uuidv4();
    }

}
