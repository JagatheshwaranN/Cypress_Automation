/// <reference types="cypress" />
describe('Alert Popup Demo', ()=>{

    it('Verify Alert Popup Demo - Simple Alert', ()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.xpath('//button[text()="Click for JS Alert"]').click();
        cy.on('window:alert', (obj)=>{
            expect(obj).to.contains('I am a JS Alert');
        })
    })

    it('Verify Alert Popup Demo - Confirm Alert', ()=>{
        

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.get('button[onclick="jsConfirm()"]').click();
        cy.on('window:confirm', (obj)=>{
            expect(obj).to.contains('I am a JS Confirm');
        })
        cy.get('button[onclick="jsConfirm()"]').click();
        cy.on('window:confirm', ()=>false);
        cy.get('#result').should('have.text','You clicked: Cancel');
    })

    it('Verify Alert Popup Demo - Prompt Alert', ()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.window().then((winObj)=>{
            cy.stub(winObj,'prompt').returns('Test');
        })
        cy.on('window:prompt', (obj)=>{
            expect(obj).to.contains('I am a JS prompt');
        })
        cy.get('button[onclick="jsPrompt()"]').click();
        cy.get('#result').should('have.text','You entered: Test');
    })

    it('Verify Alert Popup Demo - Auth Alert - Type1', ()=>{

        cy.visit('https://the-internet.herokuapp.com/basic_auth', { auth : {username:"admin",password:"admin"}});
        cy.get('.example > h3').should('have.text','Basic Auth');  
    })

    it('Verify Alert Popup Demo - Auth Alert - Type2', ()=>{

        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth');
        cy.get('.example > h3').should('have.text','Basic Auth');  
    })

})