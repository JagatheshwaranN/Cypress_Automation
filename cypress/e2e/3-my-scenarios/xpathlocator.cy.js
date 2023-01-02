
describe ('XPath Locators Demo', ()=>{

    it('Verify XPath Locators', ()=>{
        cy.visit('https://admin-demo.nopcommerce.com/login');
        cy.xpath('//input[@name="Email"]').clear();
        cy.xpath('//input[@id="Email"]').type('admin@yourstore.com');
        cy.xpath('//input[@class="password"]').clear();
        cy.xpath('//input[@name="Password"]').type('admin123');

    })
})