context('Cypress APIs Demo', ()=>{

    it('Verify CPU Arch Name of OS', ()=>{

        expect(Cypress.arch).to.be.exist;
        cy.log(Cypress.arch);
    })

    // Not sure about the usecase
    it('Set & Get Cypress Configurations', ()=>{

        let config = Cypress.config();
        expect(config).to.have.property('baseUrl', null);
        expect(Cypress.config('pageLoadTimeout')).to.eq(60000);
        Cypress.config('pageLoadTimeout', 20000);
        expect(Cypress.config('pageLoadTimeout')).to.eq(20000);
        Cypress.config('pageLoadTimeout', 60000);  
    })
})