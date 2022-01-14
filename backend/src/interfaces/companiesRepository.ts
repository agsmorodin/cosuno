import ICompany from './company';

interface ICompaniesRepository {
    getCompanies: () => Promise<ICompany[]>;
}

export default ICompaniesRepository;
