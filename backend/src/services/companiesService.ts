import ICompaniesRepository from '../interfaces/companiesRepository';
import ICompany from '../interfaces/company';
import ICompaniesService from '../interfaces/companiesService';

class CompaniesService implements ICompaniesService {
    companiesRepository: ICompaniesRepository;

    constructor(companiesRepository: ICompaniesRepository) {
        this.companiesRepository = companiesRepository;
    }

    async getCompanies(): Promise<ICompany[]> {
        return this.companiesRepository.getCompanies();
    }
}

export default CompaniesService;
