context('Window Demo', ()=>{

    it('Verify window demo', ()=>{

        cy.visit('https://www.cypress.io/');
        cy.window().should('have.property', 'top');
    })

    it('Verify document demo', ()=>{

        cy.visit('https://www.cypress.io/');
        cy.document().should('have.property', 'charset').and('eq','UTF-8');
    })
})