context('Actions Demo', ()=>{

    it('Verify Actions Demo - Type () with delay', ()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php');
        cy.get('input[name="username"]').type('Admin',{delay:500});
        cy.get('input[name="username"]').type('{selectAll}');
        cy.get('input[name="username"]').type('{leftArrow}');
        cy.get('input[name="username"]').type('{home}');
        //cy.get('input[name="username"]').type('{ctrl+a}'); Combination of Modifier and key is not working
    })

    it.only('Verify Actions Demo - Type () into Disabled Field', ()=>{

        cy.visit('cypress/frontend/action.html');
        cy.get('.disabled').clear({force:true});
        cy.get('.disabled').type('Admin',{force:true});
    })


})