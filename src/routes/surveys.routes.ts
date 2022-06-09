import { Router } from "express";

export const surveysRoutes = Router();


surveysRoutes.get('/', (req, res) => {

    return res.status(200).send({ message: 'Running!' });
})
