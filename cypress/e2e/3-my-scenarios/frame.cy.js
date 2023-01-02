/// <reference types="cypress" />

describe('Frame Demo', ()=>{

    it('Verify Iframe using normal command - Approach 1', ()=>{

        cy.visit('https://the-internet.herokuapp.com/tinymce');
        
        const iframe = cy.get('#mce_0_ifr')
                        .its('0.contentDocument.body')
                        .should('be.visible')
                        .then(cy.wrap);
        iframe.contains('Your content goes here.').clear();
       // iframe.type('Cypress {ctrl+a}'); - It will not work as DOM get detached.
    })

    it('Verify Iframe using custom command - Approach 2', ()=>{

        cy.visit('https://the-internet.herokuapp.com/tinymce');
        cy.getFrame('#mce_0_ifr').contains('Your content goes here.').clear();
        cy.getFrame('#mce_0_ifr').type('Cypress {ctrl+a}');
    })

    it('Verify Iframe using frame plugin - Approach 3', ()=>{

        cy.visit('https://the-internet.herokuapp.com/tinymce');
        cy.frameLoaded('#mce_0_ifr');
        cy.iframe('#mce_0_ifr').contains('Your content goes here.').clear();
        cy.iframe('#mce_0_ifr').type('Cypress');        
    })

})