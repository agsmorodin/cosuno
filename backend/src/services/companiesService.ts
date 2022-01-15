import ICompaniesRepository from '../interfaces/companiesRepository';
import ICompany from '../interfaces/company';
import ICompaniesService from '../interfaces/companiesService';

class CompaniesService implements ICompaniesService {
    companiesRepository: ICompaniesRepository;

    constructor(companiesRepository: ICompaniesRepository) {
        this.companiesRepository = companiesRepository;
    }

    getCompanies(): ICompany[] {
        return this.companiesRepository.getCompanies();
    }
}

export default CompaniesService;
