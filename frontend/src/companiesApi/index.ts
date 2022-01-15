import config from '../config/default.json';

const fetchCompanies = async () => {
    const response = await fetch(config.GET_COMPANIES_URL, {
        method: 'GET',
    });
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return response.json();
};

export {
    fetchCompanies,
};
