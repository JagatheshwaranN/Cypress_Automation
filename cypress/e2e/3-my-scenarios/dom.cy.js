describe ('DOM Demo', ()=>{

    it('Verify element attached', ()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php');
        cy.get('.oxd-input.oxd-input--active').first().then(($ele)=> {
            Cypress.dom.isAttached($ele);
        })
    })
})