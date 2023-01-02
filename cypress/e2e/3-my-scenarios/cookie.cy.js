context('Cookie Demo', ()=>{

    beforeEach('Set Cookie Debug', ()=>{
        Cypress.Cookies.debug(true);
    })

    it('Verify Get Cookies', ()=>{
        
        cy.visit('https://www.amazon.in/');
        cy.getCookies().then((cookies)=>{
            cookies.forEach((cookie)=>{
                cy.log("Cookie information : " + cookie.name);
            })
        })

    })

    it('Verify Get Cookie', ()=>{
       
        cy.visit('https://www.amazon.in/');
        cy.getCookie('session-id').then((cookie)=>{
            cy.log(cookie.name);
            cy.log(cookie.path);
            cy.log(cookie.domain);
            cy.log(cookie.httpOnly);
            cy.log(cookie.value);
            cy.log(cookie.expiry);
            cy.log(cookie.sameSite);
            cy.log(cookie.secure);
            expect(cookie).to.have.property('domain','.amazon.in');
        })
    })

    it('Verify Set & Get Cookie', ()=>{

        cy.visit('https://www.amazon.in/');
        cy.setCookie('Test','Cypress123');
        cy.getCookie('Test').should('have.property','value','Cypress123');
    })

   it('Verify Clear Cookie/s', ()=>{

    cy.visit('https://www.amazon.in/');
    cy.setCookie('Test','Cypress123');
    cy.getCookie('Test').should('have.property','value','Cypress123');
    cy.clearCookie('Test');
    cy.getCookie('Test').should('be.null');
    cy.getCookies().clearCookies();
    cy.getCookies().should('be.empty');
   })

})