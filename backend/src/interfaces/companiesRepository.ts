import ICompany from './company';

interface ICompaniesRepository {
    getCompanies: () => ICompany[];
}

export default ICompaniesRepository;
