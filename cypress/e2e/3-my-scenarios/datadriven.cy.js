describe('Datadriven Testing Demo', ()=>{

    it('Verify datadriven testing', ()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        
        cy.fixture('datadriventest').then((data)=>{
            data.forEach((userdata) => {

                cy.get('input[name="username"]').type(userdata.username);
                cy.get('input[name="password"]').type(userdata.password);
                cy.get('.oxd-button.oxd-button--medium.oxd-button--main.orangehrm-login-button').click();
                cy.wait(5000);
                if(userdata.username=="admin" && userdata.password=="admin123"){
                    cy.get('img[alt="client brand banner"]').should('be.visible');
                    cy.get('.oxd-userdropdown-name').click();
                    cy.xpath('//a[text()="Logout"]').click();
                }
                else{
                    cy.get('.oxd-text.oxd-text--p.oxd-alert-content-text').should('be.visible');
                }
                
            });

        })

    })
})