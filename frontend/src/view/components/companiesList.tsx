import React from 'react';
import Company from './company';
import { ICompany } from '../../interfaces';

const CompaniesList = ({ companies }: { companies: ICompany[] }) => (
    <div>
        <table className="table table-striped">
            <thead>
                <th>Logo</th>
                <th>Company name</th>
                <th>Specialities</th>
                <th>Country</th>
            </thead>
            <tbody>
                {companies.map((company) => <Company key={company.id} company={company} />)}
            </tbody>
        </table>
    </div>
);

export default CompaniesList;
