context('Assertions Demo', ()=>{

    it.only('Verify implicit assertion', ()=>{

        cy.visit('cypress/frontend/parent.html');
        cy.get('.assertion-table')
        .find('tbody tr:last')
        .should('have.class','success')
        .find('td')
        .first()
        .should('have.text','Erica')
        .should('contain', 'Erica')
        .should('have.html','Erica')
        .should('match', 'td');
        cy.get('.assertion-table')
        .find('tbody tr:last')
        .contains('td','Erica')
        .should('be.visible');
    })

})