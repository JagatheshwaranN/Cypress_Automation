describe('Alias Demo', ()=>{

    it('Verify alias demo - Element', ()=>{

        cy.visit('https://example.cypress.io/commands/aliasing');
        cy.get('table[class="as-table table table-bordered"]>tbody>tr:nth-child(1)>td:nth-child(1)>button:nth-child(1)').as('firstButton');
        cy.get('@firstButton').click();
        cy.get('@firstButton').should('have.class','btn-success').and('contain','Changed');
        cy.wait(3000);
    
    })

    it('Verify alias demo - Network Call', ()=>{

        cy.visit('https://example.cypress.io/commands/aliasing');
        cy.intercept('GET','**/comments/*').as('getComment');
        cy.get('.network-btn.btn.btn-primary').click();
        cy.wait('@getComment').its('response.statusCode').should('eq',200);
        cy.wait(3000);
    })
})