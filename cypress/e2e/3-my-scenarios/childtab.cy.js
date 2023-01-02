/// <reference types="cypress" />
describe ('Child Tab Handle Demo', ()=>{

    it('Verify Child Tab and Handle - Approach 1', ()=>{

        cy.visit('https://the-internet.herokuapp.com/windows');
        cy.get('.example > a').invoke('removeAttr','target').click();
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new');
        cy.go('back');

    })

    it('Verify Child Tab and Handle - Approach 2', ()=>{

        cy.visit('https://the-internet.herokuapp.com/windows');
        cy.get('.example > a').then((obj)=>{
            let newURL = obj.prop('href');
            cy.visit(newURL);
        })
        cy.wait(2000);
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new');
        cy.go('back');

    })

})