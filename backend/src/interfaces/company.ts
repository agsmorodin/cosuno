import CompanyType from '@constants/speciality';

type ICompany = {
    id: string;
    name: string;
    logo: string;
    specialities: CompanyType[];
    city: string;
}

export default ICompany;
