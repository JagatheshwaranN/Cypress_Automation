context('Location Demo', ()=>{

    it('Verify Location Demo', ()=>{

        cy.visit('https://docs.cypress.io/api/commands/location#Syntax');
        cy.location().should((loc)=>{

            expect(loc.hash).to.eq('#Syntax');
            expect(loc.host).to.eq('docs.cypress.io');
            expect(loc.hostname).to.eq('docs.cypress.io');
            expect(loc.href).to.eq('https://docs.cypress.io/api/commands/location#Syntax');
            expect(loc.origin).to.eq('https://docs.cypress.io');
            expect(loc.port).to.be.empty;
            expect(loc.pathname).to.eq('/api/commands/location');
            expect(loc.protocol).to.eq('https:')
        })
    })

    it('Verify Location Demo', ()=>{

        cy.visit('https://bookcart.azurewebsites.net/search?item=hp7');
        cy.location().should((loc)=>{
            expect(loc.toString()).to.eq('https://bookcart.azurewebsites.net/search?item=hp7');
            expect(loc.search).to.eq('?item=hp7');
        })
    })
})