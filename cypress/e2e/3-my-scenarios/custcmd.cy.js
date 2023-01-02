describe('Custom Commands Demo', ()=>{

    it('Verify custom commands - New Command for Link Click', ()=>{

        cy.visit('https://demo.nopcommerce.com/');
        cy.clickLinkByLabel('Apple MacBook Pro 13-inch');
        cy.get('.product-name').should('be.visible');
    })

    it('Verify custom commands - Override existing command for contains()', ()=>{

        cy.visit('https://demo.nopcommerce.com/');
        cy.clickLinkByLabel('APPLE MACBOOK PRO 13-inch');
        cy.get('.product-name').should('be.visible');
    })

    it('Verify custom commands - Custom command for reusable component', ()=>{

        cy.visit('https://admin-demo.nopcommerce.com/login');
        cy.loginApp('admin@yourstore.com','admin');
        cy.get('.content-header').should('be.visible');
    })

})