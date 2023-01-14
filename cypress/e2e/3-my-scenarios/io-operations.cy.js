const requiredSample = require('../../fixtures/sample.json');

describe('Verify IO Operations Demo', ()=>{

    beforeEach('Visit Files WebSite', ()=>{

        cy.fixture('sample.json').as('sample');
        cy.visit('https://example.cypress.io/commands/files');
    })

    it('Load Fixture File while invoking GET method', ()=>{

        cy.intercept('GET', '**/comments/*', {fixture:'sample.json'}).as('getMethod');
        cy.get('.fixture-btn.btn.btn-primary').click();
        cy.wait('@getMethod').its('response.body').should('have.property', 'name')
        .and('include', 'Using fixtures to represent data');
    })
    
    it('Load Fixture', function(){
        expect(this.sample).to.deep.equal(requiredSample);
        cy.wrap(this.sample).should('deep.equal',requiredSample);
    })

    it('Read File', ()=>{
        cy.readFile(Cypress.config('configFile')).then((config)=>{
            expect(config).to.be.an('string');
            expect(config).to.have.contains('cypress-mochawesome-reporter');
        })
        cy.readFile('cypress/fixtures/example.json').then((data)=>{
            expect(data).to.be.an('object')
            expect(data.username).to.equal('admin');
        })
    })

    it('Write File', ()=>{

        cy.request('https://jsonplaceholder.cypress.io/users/2')
        .then((response)=>{
            cy.writeFile('cypress/fixtures/user.json',response.body);
        })
        cy.fixture('user').should((user)=>{
            expect(user.name).to.exist;
        })

        cy.writeFile('cypress/fixtures/profile.json', {
            id:121,
            name: 'Alex',
            email: 'alex@gmail.com'
        })
        cy.fixture('profile').should((data)=>{
            expect(data.name).to.equal('Alex');
        })
    })
})