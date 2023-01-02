describe('Capture Screenshot Demo', ()=>{

    it('Verify capture screenshot demo', ()=>{

        cy.visit('https://demo.opencart.com/');
        cy.screenshot('opencart');
        cy.get('#menu').screenshot('opencart_menu');
    })
})