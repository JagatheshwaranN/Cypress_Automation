describe('Browser Navigation Demo', ()=>{

    it('Verify browser navigation', ()=>{

        cy.visit('https://demo.opencart.com/');
        cy.xpath('//span[text()="Shopping Cart"]').click();
        cy.title().should('eq','Shopping Cart');
        cy.go('back');
        cy.title().should('eq','Your Store');
        cy.go('forward');
        cy.title().should('eq','Shopping Cart');
        cy.go(-1);
        cy.title().should('eq','Your Store');
        cy.go(1);
        cy.title().should('eq','Shopping Cart');
        cy.reload();
    })
})