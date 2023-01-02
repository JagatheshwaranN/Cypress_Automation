describe('Radio Button & Checkbox Demo', ()=>{

    it('Verify radio button', ()=>{

        cy.visit('https://itera-qa.azurewebsites.net/home/automation');
        cy.get('#male').check().should('be.checked');
        cy.get('#female').should('not.be.checked');

    })

    it('Verify checkbox button', ()=>{

        cy.visit('https://itera-qa.azurewebsites.net/home/automation');
        cy.get('#monday').check().should('be.checked');
        cy.get('#tuesday').should('not.be.checked');
        cy.get('#monday').uncheck().should('not.be.checked');

        cy.get('.form-check-input[type="checkbox"]').check().should('be.checked');
        cy.get('.form-check-input[type="checkbox"]').uncheck().should('not.be.checked');

        cy.get('.form-check-input[type="checkbox"]').first().check().should('be.checked');
        cy.get('.form-check-input[type="checkbox"]').last().check().should('be.checked');
    })
})