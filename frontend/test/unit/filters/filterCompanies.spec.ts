import companiesMock from '../mocks/companies.json';
import filterCompanies from '../../../src/filters/filterCompanies';

describe('filterCompanies', () => {
    test('returns filtered companies', async () => {
        const filteredCompanies = filterCompanies({
            companies: companiesMock,
            companyNameFilter: 'a',
            specialitiesFilter: [{
                name: 'excavation',
                checked: true,
            }, {
                name: 'electrial',
                checked: true,
            }],
        });
        expect(filteredCompanies).toEqual([{
            city: 'Berlin',
            id: '34cf7c79-0653-49fc-9d35-93a877846010',
            logo: 'https://placekitten.com/300/200',
            name: 'Balfour',
            specialities: ['excavation', 'plumbing']
        }]);
    });
});
