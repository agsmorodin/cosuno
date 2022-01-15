import { ICompany } from '../interfaces';

const extractSpecialities = (companies: ICompany[]) => {
    // @ts-ignore
    const specialitiesSet = Array.from(companies.reduce((acc, c) => acc.add(...c.specialities), new Set()));
    const specialities = [];
    for (const s of specialitiesSet) {
        specialities.push({
            name: s,
            checked: true,
        });
    }
    return specialities;
};

export default extractSpecialities;
