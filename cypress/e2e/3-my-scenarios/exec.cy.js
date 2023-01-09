context('Exec Command Demo', ()=>{

    it('Verify exec() command', ()=>{

        if(Cypress.platform=='win32'){
            cy.exec('print package.json').its('stderr').should('be.empty');
        }       
    })

    it('Verify exec() command', ()=>{
        
        cy.exec('echo Cypress').its('stdout').should('contain','Cypress');
    })
})