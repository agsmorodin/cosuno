describe('Companies', () => {
    it('Should display list of companies', () => {
        cy.intercept('GET', '/api/v1/companies', { fixture: 'companies.json' }).as('getCompaniesRequest');
        cy.visit('/index.html?automation=true');
        cy.get('table')
            .find('tr')
            .should('have.length', 3);
    });
});
