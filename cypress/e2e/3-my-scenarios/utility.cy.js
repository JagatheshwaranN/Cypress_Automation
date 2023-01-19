context ('Utility Demo', ()=>{

    it('Verify Utility Demo - Chain', ()=>{

        cy.request('https://jsonplaceholder.cypress.io/users')
        .then((response)=> {
            let ids = Cypress._.chain(response.body).map('id').take(5).value();
            expect(ids).to.deep.eq([1,2,3,4,5]);
        })
    })
})