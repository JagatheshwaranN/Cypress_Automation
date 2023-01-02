describe('Hooks and Tags Demo', ()=>{

    before('Before Hook', ()=>{
        cy.log('***** Launch Application *****');
    })

    beforeEach('BeforeEach Hook', ()=>{
        cy.log('***** Login to Application *****');
    })

    it('Search and Browse', ()=>{
        cy.log('***** Search and Browse *****');
    })

    it('Checkout', ()=>{
        cy.log('***** Checkout *****');
    })

    afterEach('AfterEach Hook', ()=>{
        cy.log('***** Logout from Application *****');
    })

    after('After Hook', ()=>{
        cy.log('***** Close Application *****');
    })
    
}) 

   
