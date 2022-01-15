import express from 'express';
import cors from 'cors';
import CompaniesRepository from './repositories/companiesRepository';
import CompaniesService from './services/companiesService';

const companiesRepository = new CompaniesRepository();
const companiesService = new CompaniesService(companiesRepository);
const app = express();

// @ts-ignore
const handleController = (fn) => async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        const response = await fn(req, res);
        res.json(response);
        return next();
    } catch (ex) {
        return next(ex);
    }
};

app.use(cors());

app.get('/api/v1/companies', handleController(companiesService.getCompanies.bind(companiesService)));

app.listen(3000);
