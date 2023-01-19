describe('Session Storage Demo', ()=>{

it('Verify Session Storage - Set and Get Session Storage', ()=>{

    cy.visit('https://demo.nopcommerce.com/');
    cy.log('Actual session storage count : '+sessionStorage.length);
    sessionStorage.setItem('cypress', 'test');
    cy.log('After setting up cypress data, session storage count : '+sessionStorage.length);
    cy.log(sessionStorage.getItem('cypress'));
    cy.wait(1000).then(()=>{
        expect(sessionStorage.getItem('cypress')).to.equal('test');
        expect(sessionStorage.length).to.equal(1);
    })
})

it('Verify Session Storage - Clear Session Storage', ()=>{

    cy.visit('https://demo.nopcommerce.com/');
    cy.log('Actual session storage count : '+sessionStorage.length);
    sessionStorage.setItem('cypress', 'test');
    cy.log('After setting up cypress data, session storage count : '+sessionStorage.length);
    sessionStorage.clear();
    cy.wait(1000).then(()=>{
        expect(sessionStorage.getItem('cypress')).to.be.null;
        expect(sessionStorage.length).to.equal(0);
    })
})

it('Verify Session Storage - Remove Session Storage', ()=>{

    cy.visit('https://demo.nopcommerce.com/');
    cy.log('Actual session storage count : '+sessionStorage.length);
    sessionStorage.setItem('cypress', 'test');
    cy.log('After setting up cypress data, session storage count : '+sessionStorage.length);
    sessionStorage.removeItem('cypress');
    cy.wait(1000).then(()=>{
        expect(sessionStorage.getItem('cypress')).to.be.null;
        expect(sessionStorage.length).to.equal(0);
    })
})

})