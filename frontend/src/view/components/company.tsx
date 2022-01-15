import React from 'react';
import { ICompany } from '../../interfaces';

const Company = ({ company } : { company: ICompany }) => (
    <tr>
        <td><img className="logo" alt={company.name} src={company.logo} /></td>
        <td>{company.name}</td>
        <td>{company.specialities.join(', ')}</td>
        <td>{company.city}</td>
    </tr>
);

export default Company;
