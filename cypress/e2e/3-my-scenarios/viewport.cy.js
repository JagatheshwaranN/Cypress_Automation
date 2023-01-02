describe ('Viewport Demo', ()=>{

    it('Verify viewport demo', ()=>{

        cy.visit('https://example.cypress.io/commands/viewport');
        cy.viewport(550,750);
        cy.wait(3000);
        cy.viewport(1366, 728);
        cy.wait(3000);
        cy.viewport('iphone-8');
        cy.wait(3000);
        cy.viewport('macbook-15');
        cy.wait(3000);
        cy.viewport('ipad-mini');
        cy.wait(3000);
        cy.viewport('samsung-note9')

    })
})