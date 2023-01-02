/// <reference types="cypress" />

describe ('My First Test Suite', ()=> {
    it('Launch Cypress Site', ()=> {
        cy.visit("https://opensource-demo.orangehrmlive.com");
        cy.title().should('eq','OrangeHRM')
    })
})

describe ('My Second Test Suite', function() {
    it('Launch Google Site', function() {
        cy.visit("https://www.google.com/");
        cy.title().should('eq','Google')
    })
})