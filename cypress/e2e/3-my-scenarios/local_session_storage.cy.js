describe('Local Storage Demo', ()=>{

    it('Verify Local Storage - Set and Get Local Storage', ()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php');
        cy.log('Actual local storage count : '+localStorage.length);
        cy.log('Setting up cypress data in local storage');
        localStorage.setItem('cypress', 'Test');
        cy.log('After setting up cypress data, local storage count : '+localStorage.length);
        cy.wait(2000);
        cy.log(localStorage.getItem('cypress'));
    })
})