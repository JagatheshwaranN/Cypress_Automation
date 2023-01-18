describe('Browser Navigation Demo', ()=>{

beforeEach('Verify Launch', ()=>{
    cy.visit('https://example.cypress.io');
})

it('Visit any sub-domain of your current domain', ()=>{

    cy.visit('https://example.cypress.io/commands/navigation', {
        timeout: 50000,
        onBeforeLoad(window) {
            expect(typeof window === 'object').to.be.true
        },
        onLoad(window){
            expect(typeof window === 'object').to.be.true
        }
    })
})
})

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
    // Reload the page without cache
    // cy.reload(true);
})
})