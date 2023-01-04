context('Actions Demo', ()=>{

    it('Verify Actions Demo - Type () with delay', ()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php');
        cy.get('input[name="username"]').type('Admin',{delay:500});
        cy.get('input[name="username"]').type('{selectAll}');
        cy.get('input[name="username"]').type('{leftArrow}');
        cy.get('input[name="username"]').type('{home}');
        //cy.get('input[name="username"]').type('{ctrl+a}'); Combination of Modifier and key is not working
    })

    it('Verify Actions Demo - Type () into Disabled Field', ()=>{

        cy.visit('cypress/frontend/action.html');
        cy.get('.disabled').clear({force:true});
        cy.get('.disabled').type('Admin',{force:true});
    })

    // Didn't find it useful
    it('Verify Actions Demo - Blur()', ()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php');
        cy.get('input[name="username"]').type('Admin',{delay:500}).blur();
    })

    it('Verify Actions Demo - Submit()', ()=>{

        cy.visit('cypress/frontend/action.html');
        cy.get('#couponCode1').type('FLAT50');
        cy.get('.action-form').submit();
        cy.get('.parent > p').should('be.visible');
    })

    it('Verify Actions Demo - Click()', ()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php');
        cy.get('.oxd-button.oxd-button--medium.oxd-button--main.orangehrm-login-button').click('left');
        cy.get('.oxd-text.oxd-text--span.oxd-input-field-error-message.oxd-input-group__message').should('be.visible');
    })

    it('Verify Actions Demo - Click(Multiple)', ()=>{

        cy.visit('https://itera-qa.azurewebsites.net/home/automation');
        cy.get('.form-check-label > input[type="checkbox"]').click({multiple:true});
    })


})