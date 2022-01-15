import companiesMock from '@mocks/companies.json';
import ICompany from '../interfaces/company';
import ICompaniesRepository from '../interfaces/companiesRepository';

class CompaniesRepository implements ICompaniesRepository {
    companies: Map<string, ICompany>;

    constructor() {
        this.companies = new Map();
        for (const company of <ICompany[]> companiesMock) {
            this.companies.set(company.id, company);
        }
    }

    getCompanies(): ICompany[] {
        return Array.from(this.companies.values());
    }
}

export default CompaniesRepository;
