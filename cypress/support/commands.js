// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />
////<reference types="cypress-iframe" />
import 'cypress-xpath'
import 'cypress-iframe'
import '@4tw/cypress-drag-drop'
import 'cypress-file-upload'

// To get the Frame on the page
Cypress.Commands.add('getFrame',(frameLocator)=>{

    return cy.get(frameLocator)
           .its('0.contentDocument.body')
           .should('be.visible')
           .then(cy.wrap);

} );

// To click the Link on the page using label
Cypress.Commands.add('clickLinkByLabel', (label)=>{
    cy.get('a').contains(label).click();
})

// Override contains() to handle the element ignoring case
/*Cypress.Commands.overwrite('contains',(originalFn, subject, filter, text, options = {})=>{
    if( typeof text == 'object'){
        options = text;
        text = filter;
        filter = undefined;
    }
    options.matchCase = false;
    return originalFn(subject, filter, text, options);
} )*/

// Custom commad for reusable component
Cypress.Commands.add('loginApp', (email, password)=>{
    cy.get('#Email').clear();
    cy.get('#Email').type(email);
    cy.get('#Password').clear();
    cy.get('#Password').type(password);
    cy.get('.button-1.login-button').click();
})
