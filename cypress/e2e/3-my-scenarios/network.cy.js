describe('Network Request Demo', ()=>{

    it('Verify XHR request using TDD approach', ()=>{

        cy.request('https://reqres.in/api/users').should((response) =>{
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('total').and.be.eq(12);
            expect(response).to.have.property('headers');
            expect(response).to.have.property('duration');
            expect(response.headers).to.have.property('cache-control','max-age=14400');
        })
    })

    it('Verify XHR request using BDD approach', ()=>{

        cy.request('https://reqres.in/api/users').then((response) =>{
            expect(response).property('status').to.equal(200);
            expect(response).property('body').to.have.property('total').and.be.eq(12);
            expect(response).to.include.keys('headers','duration');
            expect(response).property('headers').to.have.property('cache-control','max-age=14400');
        })
    })

    it('Verify Request with query parameters', ()=>{

        cy.request({url:'https://demoqa.com/BookStore/v1/Book', qs:{ISBN:9781449325862}})
        .its('body').should('not.be.an','array').and('contain', {
            isbn:"9781449325862",title:"Git Pocket Guide"
        })
    })


})