/// <reference types="cypress" />
describe ('CSS Locators Demo', ()=>{

it('Verify CSS Locators', ()=> {
    cy.visit('https://admin-demo.nopcommerce.com/login');
    cy.get('#Email').clear();
    cy.get('input[name="Email"]').type('admin@yourstore.com');
    cy.get('.password').clear();
    cy.get('.password[name="Password"').type('admin123');
})

})