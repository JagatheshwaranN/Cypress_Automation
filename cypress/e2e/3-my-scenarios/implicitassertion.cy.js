describe('Implicit Assertion Demo', ()=>{

    it('Verify Implicit Assertions', ()=>{

        // should()
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.url().should('include','orangehrmlive');
        cy.url().should('contain','https://opensource-demo.orangehrmlive.com/');
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        
        // should() chaining
        cy.url().should('include','orangehrmlive')
        .should('contain','https://opensource-demo.orangehrmlive.com/')
        .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        // should() & and()
        cy.url().should('include','orangehrmlive')
        .and('contain','https://opensource-demo.orangehrmlive.com/')
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

       // should() & and() - Not Case
       cy.url().should('not.include','googlelive')
       .and('not.contain','www.google.com')
       .and('not.eq','https://www.google.com/');

        //should(be.visible)
        cy.get('img[alt="company-branding"]').should('be.visible');

        //should(exist)
        cy.get('img[alt="company-branding"]').should('exist');

        //should(have.length)
        cy.xpath('//a').should('have.length','5');

        //should(have.length) - Not Case
        cy.xpath('//a').should('not.have.length','7');

        cy.get('input[name="username"]').type('Admin');

        //should(have.value)
        cy.get('input[name="username"]').should('have.value','Admin');

        //should(have.value) - Not Case
        cy.get('input[name="username"]').should('not.have.value','Admin123');

    })
})