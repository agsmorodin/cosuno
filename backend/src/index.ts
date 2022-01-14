import express from 'express';
import CompaniesRepository from '@repositories/companiesRepository';
import CompaniesService from '@services/companiesService';

const companiesRepository = new CompaniesRepository();
const companiesService = new CompaniesService(companiesRepository);
const app = express();

// @ts-ignore
const handleController = fn => async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const response = await fn(req, res);
        res.json(response);
        return next();
    } catch (ex) {
        return next(ex);
    }
};

app.get('/api/v1/companies', handleController(companiesService.getCompanies.bind(companiesService)));

app.listen(3000);
