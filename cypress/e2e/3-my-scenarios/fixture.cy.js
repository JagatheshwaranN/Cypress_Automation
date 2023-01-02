describe('Use Data From Fixtures Demo', ()=>{

    it.skip('Verify taking data from fixtures', ()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        cy.fixture('example').then((data)=>{
            cy.get('input[name="username"]').type(data.username);
            cy.get('input[name="password"]').type(data.password);
            cy.get('.oxd-button.oxd-button--medium.oxd-button--main.orangehrm-login-button').click();
            cy.wait(5000);
            cy.get('img[alt="client brand banner"]').should('be.visible');
        })
    })

    let userdata;
    before('Take data from Fixtures', ()=>{
        cy.fixture('example').then((data)=>{
            userdata = data;
        })
    })
    
    it('Verify taking data from fixtures using hooks', ()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('input[name="username"]').type(userdata.username);
        cy.get('input[name="password"]').type(userdata.password);
        cy.get('.oxd-button.oxd-button--medium.oxd-button--main.orangehrm-login-button').click();
        cy.wait(5000);
        cy.get('img[alt="client brand banner"]').should('be.visible');
    })
  
})