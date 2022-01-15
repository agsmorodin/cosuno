import React, { useEffect } from 'react';
import CompaniesList from './components/companiesList';
import Search from './components/search';
import { fetchCompanies } from '../companiesApi';
import Filter from './components/filter';
import filterCompanies from '../filters/filterCompanies';
import extractSpecialities from '../filters/extractSpecialities';
import '../style.css';

const App = () => {
    const [companyNameFilter, setCompanyNameFilter] = React.useState('');
    const [companies, setCompanies] = React.useState([]);
    const [error, setError] = React.useState(null);
    const [specialities, setSpecialities] = React.useState([]);

    useEffect(() => {
        getCompanies();
    }, []);

    useEffect(() => setSpecialities(extractSpecialities(companies)), [companies]);

    const getCompanies = async () => {
        try {
            setCompanies(await fetchCompanies());
        } catch (err) {
            setError('Error fetching companies');
        }
    };

    const filteredCompanies = filterCompanies({
        companies,
        companyNameFilter,
        specialitiesFilter: specialities,
    });

    const onSearch = (val: string) => setCompanyNameFilter(val);

    const onFilterChange = (name: string, value: boolean) => {
        setSpecialities(specialities.map((speciality) => {
            if (speciality.name === name) {
                return {
                    name: speciality.name,
                    checked: value,
                };
            }
            return speciality;
        }));
    };

    return (
        <div className="main-container">
            <Search
              filterValue={companyNameFilter}
              onSearch={onSearch}
              placeholder="Search by company name"
            />
            <Filter
              items={specialities}
              onFilterChange={onFilterChange}
            />
            <CompaniesList
              companies={filteredCompanies}
            />
            {error}
        </div>
    );
};

export default App;
