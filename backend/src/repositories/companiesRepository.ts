import companiesMock from '@mocks/companies.json';
import ICompany from '../interfaces/company';
import ICompaniesRepository from '../interfaces/companiesRepository';

class CompaniesRepository implements ICompaniesRepository{
    companies: any;
    constructor() {
        this.companies = new Map();
        for(let company of companiesMock) {
            this.companies.set(company.id, company);
        }
    }

    async getCompanies(): Promise<ICompany[]> {
        return Array.from(this.companies.values());
    }
}

export default CompaniesRepository;
