context('Page Scroll Demo', ()=>{

    it('Verify Page Scroll - ScrollIntoView', ()=>{

        cy.visit('https://www.countries-ofthe-world.com/flags-of-the-world.html');
        cy.get('img[alt="Flag of India"]').scrollIntoView({duration:2000});
    })

    it('Verify Page Scroll - ScrollIntoView', ()=>{

        cy.visit('cypress/frontend/action.html');
        cy.get('#scroll-horizontal button').scrollIntoView({duration:2000}).should('be.visible');
        cy.wait(3000);
        cy.get('#scroll-vertical button').scrollIntoView({duration:2000}).should('be.visible');
        cy.wait(3000);
        cy.get('#scroll-both button').scrollIntoView({duration:2000}).should('be.visible');
    })


    it('Verify Page Scroll - ScrollTo', ()=>{

        cy.visit('cypress/frontend/action.html');
        cy.scrollTo('bottom');
        cy.wait(3000);
        cy.scrollTo('top');
    })

    it('Verify Page Scroll - ScrollTo', ()=>{

        cy.visit('cypress/frontend/action.html');
        cy.wait(3000);
        cy.get('#scroll-horizontal').scrollTo('right');
        cy.wait(3000);
        cy.get('#scroll-vertical').scrollTo(100, 100);
        cy.wait(3000);
        cy.get('#scroll-both').scrollTo('75%', '25%');
        cy.wait(3000);
        cy.get('#scroll-vertical').scrollTo('center', {easing:"linear"});
        cy.wait(3000);
        cy.get('#scroll-both').scrollTo('center', {duration: 2000});
    })

    it('Verify Page Scroll - ScrollTo', ()=>{

        cy.visit('https://infinite-scroll.com/demo/full-page/');
        cy.scrollTo('bottom', {ensureScrollable:false});
    })

})