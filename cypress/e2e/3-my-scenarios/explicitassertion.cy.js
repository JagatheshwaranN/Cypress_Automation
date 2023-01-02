describe('Explicit Assertion Demo',()=>{

    it('Verify Explicit Assertions', ()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('input[name="username"]').type('Admin');
        cy.get('input[name="password"]').type('admin123');
        cy.get('button[type="submit"]').click();
        let expValue = "Dashboard";
        cy.get('.oxd-topbar-header-breadcrumb').then( (x)=> {
            let actValue = x.text();
            // BDD approach
            expect(actValue).to.equal(expValue);
            // expect(actValue).to.not.equal(expValue);
            // TDD approach
            assert.equal(actValue,expValue);
            // assert.notEqual(actValue,expValue);
        })

    })
})