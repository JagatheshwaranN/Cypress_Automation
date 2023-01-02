describe('Cypress Mochawesome Report Demo', ()=>{

    it('Verify Mochawesome Report - Pass', ()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.title().should('eq','OrangeHRM');
    })

    it('Verify Mochawesome Report - Fail', ()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.title().should('eq','OrangeHRM123');
    })
})