import extractSpecialities from '../../../src/filters/extractSpecialities';
import companiesMock from '../mocks/companies.json';

describe('extractSpecialities filter', () => {
    test('returns all specialities with "true" flag', async () => {
        const extractedSpecialities = extractSpecialities(companiesMock);
        expect(extractedSpecialities).toEqual([{
            name: 'excavation',
            checked: true,
        }, {
            name: 'plumbing',
            checked: true,
        }, {
            name: 'electrical',
            checked: true,
        }]);
    });
});
