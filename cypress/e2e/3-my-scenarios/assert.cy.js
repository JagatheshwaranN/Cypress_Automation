context('Assertions Demo', ()=>{

    it('Verify implicit assertion', ()=>{

        cy.visit('cypress/frontend/parent.html');
        cy.get('.assertion-table')
        .find('tbody tr:last')
        .should('have.class','success')
        .find('td')
        .first()
        .should('have.text','Erica')
        .should('contain', 'Erica')
        .should('have.html','Erica')
        .should('match', 'td');
        cy.get('.assertion-table')
        .find('tbody tr:last')
        .contains('td','Erica')
        .should('be.visible');
    })

    it.only('Verify explicit assertion', ()=>{

        expect(true).to.be.true;
        const obj = {foo : 'bar'};
        expect(obj).to.eq(obj);
        expect(obj).to.deep.equal({foo : 'bar'});
        expect('FooBar').to.match(/bar$/i);


    })

})