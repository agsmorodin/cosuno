import { ICompany, ISpecialityFilter } from '../interfaces';

const filterCompanies = ({ companies, companyNameFilter, specialitiesFilter }: {
    companies: ICompany[],
    companyNameFilter: string,
    specialitiesFilter: ISpecialityFilter[],
}) => {
    let filteredCompanies = companies;

    if (companyNameFilter) {
        const lowerCaseSearchValue = companyNameFilter.toLowerCase();
        filteredCompanies = companies.filter((c) => c.name.toLowerCase().includes(lowerCaseSearchValue));
    }

    const specialitiesSet = specialitiesFilter.reduce((acc, speciality) => {
        if (speciality.checked) {
            acc.add(speciality.name);
        }
        return acc;
    }, new Set());

    // eslint-disable-next-line array-callback-return,consistent-return
    filteredCompanies = filteredCompanies.filter((c) => {
        for (const speciality of c.specialities) {
            if (specialitiesSet.has(speciality)) {
                return c;
            }
        }
    });

    return filteredCompanies;
};

export default filterCompanies;
