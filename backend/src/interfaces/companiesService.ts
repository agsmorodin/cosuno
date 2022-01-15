import ICompany from './company';

interface ICompaniesService {
    getCompanies: () => ICompany[];
}

export default ICompaniesService;
