import companyType from '@constants/speciality';

type ICompany = {
    id: string;
    name: string;
    logo: string;
    specialities: companyType;
    city: string;
}

export default ICompany;

