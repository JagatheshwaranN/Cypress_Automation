context ('Quering Demo', ()=>{

it('Verify Invoke Scenario', ()=>{

    cy.visit('cypress/frontend/lists.html');
    cy.get('.example').invoke('attr','data-test-id').should('equal','test-example');
    cy.get('.example').should('have.attr','data-test-id','test-example');
})

it('Vderify Contains Scenario', ()=>{

    cy.visit('cypress/frontend/lists.html');
    cy.get('.healthy-foods').contains('oranges').should('have.class','3rd');
    cy.get('.healthy-foods').contains(/^o\w+/).should('have.class','3rd');
})

it('Verify Within Scenario', ()=>{

    cy.visit('cypress/frontend/lists.html');
    cy.get('.query-form').within(()=>{
        cy.get('#email').should('have.attr','placeholder','email');
        cy.get('input:last').should('have.attr','placeholder','password');
    })
})

it('Verify Root Element Scenario', ()=>{

    cy.visit('cypress/frontend/lists.html');
    cy.root().should('match','html');
    cy.get('.healthy-foods').within(()=>{
        cy.root().should('have.attr','id','eat-healthy');
    })
})
})