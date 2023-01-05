/// <reference types="cypress" />
describe('Dropdown Demo', ()=> {

    it('Verify Normal Dropdown', ()=>{

        cy.visit('https://www.zoho.com/commerce/free-demo.html')
        cy.get('#zcf_address_country').select('Albania').should('have.value','Albania');
    })

    it('Verify Bootstrap Dropdown', ()=> {
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/');
        cy.get('#select2-billing_country-container').click();
        cy.get('.select2-search__field').type('Japan').type('{enter}');
        cy.get('#select2-billing_country-container').should('have.text','Japan');
    })

    it('Verify Static Auto Suggest Dropdown', ()=>{
        cy.visit('https://www.wikipedia.org/');
        cy.get('#searchInput').type('Chennai');
        cy.get('.suggestions-dropdown .suggestion-title').contains('Chennai Central railway station').click();
        cy.get('#firstHeading>span').should('contain','Chennai Central railway station');
    })

    it('Verify Dynamic Auto Suggest Dropdown', ()=>{
        cy.visit('https://www.google.com/');
        cy.get('input[title="Search"]').type('cypress');
        cy.get('div.wM6W7d >span').should('have.length','11');
        cy.get('div.wM6W7d >span').each(($el, _index, _$list)=> {
            if($el.text()=='cypress tree'){
                cy.wrap($el).click();            
            }
        })
        cy.get('input[name="q"]').should('have.value','cypress tree');
    })

    it('Verify Multiple Select Dropdown', ()=>{

        cy.visit('cypress/frontend/action.html');
        cy.get('#cars').select(['Volvo', 'Saab']).invoke('val').should('deep.equal', ['volvo', 'saab']);
    })


})