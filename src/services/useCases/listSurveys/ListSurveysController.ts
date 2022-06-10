import { Request, Response } from 'express';

import { ListSurveysUseCase } from "./listSurveysUseCase";

export class ListSurveysController {
    constructor(private listSurveysUseCase: ListSurveysUseCase) { }

    handle(request: Request, response: Response): Response {
        const all = this.listSurveysUseCase.execute();



        return response.json(all);
    }
}
