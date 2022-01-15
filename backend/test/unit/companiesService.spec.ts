import CompaniesService from '../../src/services/companiesService';
import ICompaniesRepository from '../../src/interfaces/companiesRepository';
import companyType from '../../src/constants/speciality';

describe('Companies service', () => {
    it('returns a list of companies', () => {
        const companiesRepository = <ICompaniesRepository>{};
        companiesRepository.getCompanies = () => ([{
            id: '111',
            name: 'fakeName',
            logo: 'fakeLogo',
            specialities: [companyType.ELECTRICAL, companyType.EXCAVATION],
            city: 'fakeCity',
        }]);

        const companiesService = new CompaniesService(companiesRepository);
        const result = companiesService.getCompanies();

        expect(result).toEqual([
            {
                city: 'fakeCity',
                id: '111',
                logo: 'fakeLogo',
                name: 'fakeName',
                specialities: ['electrical', 'excavation']
            },
        ]);
    });
});
