import ICompany from './company';

interface ICompaniesService {
    getCompanies: () => Promise<ICompany[]>;
}

export default ICompaniesService;
