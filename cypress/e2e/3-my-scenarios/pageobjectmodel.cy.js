import LoginPage from "../pageobject/loginpage"

describe('Page Object Model Demo', ()=>{

    it('Verify page object model demo', ()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        const ln = new LoginPage();
        cy.fixture('example').then((data)=>{
            ln.setUserName(data.username);
            ln.setPassword(data.password);
            ln.clickLogin();
            ln.verifyLogin();
        })
       
        })
})