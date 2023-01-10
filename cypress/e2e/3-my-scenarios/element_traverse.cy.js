context('Element Traversal Demo', ()=>{

    it('Verify Element Traversal - Children', ()=>{

        cy.visit('https://www.zyxware.com/articles/4268/what-is-breadcrumb-navigation-and-how-to-perform-the-testing');
        cy.get('.pl-0').children('.current-page-title').should('contain','What is Breadcrumb Navigation and how to perform the testing?');
    })

    it('Verify Element Traversal - Closest', ()=>{

        cy.visit('https://demo.opencart.com/');
        cy.get('.fas.fa-search').closest('div').should('have.class','input-group mb-3');
    })

    it('Verify Element Traversal - Index', ()=>{

        cy.visit('https://www.w3schools.com/html/html_lists.asp');
        cy.get('ol>li').eq(1).should('contain','Second item');
    })

    it('Verify Element Traversal - Filter', ()=>{

        cy.visit('https://www.w3schools.com/html/html_lists.asp');
        cy.get('.w3-bar.w3-left>a').filter('.active').should('contain','HTML');
    })

    it('Verify Element Traversal - Find', ()=>{

        cy.visit('https://www.w3schools.com/html/html_lists.asp');
        cy.get('ol').find('li').should('have.length', 4);
    })

    it('Verify Element Traversal - First', ()=>{

        cy.visit('https://letcode.in/table');
        cy.get('#simpletable td').first().should('contain', 'Koushik');
    })

    it('Verify Element Traversal - Last', ()=>{

        cy.visit('https://letcode.in/table');
        cy.get('#shopping td').last().should('contain', 858);
    })

    it('Verify Element Traversal - Next', ()=>{

        cy.visit('cypress/frontend/lists.html');
        cy.get('.unordered-list').contains('Apple').next().should('contain','Orange');
    })

    it('Verify Element Traversal - NextAll', ()=>{

        cy.visit('cypress/frontend/lists.html');
        cy.get('.unordered-list').contains('Apple').nextAll().should('have.length',4);
    })

    it('Verify Element Traversal - NextUntil', ()=>{

        cy.visit('cypress/frontend/lists.html');
        cy.get('#veggies').nextUntil('#nuts').should('have.length', 3)
    })

    it('Verify Element Traversal - Not', ()=>{

        cy.visit('cypress/frontend/lists.html');
        cy.get('ol>li').not('.active').should('have.length', 4);
    })

    it('Verify Element Traversal - Parent', ()=>{

        cy.visit('cypress/frontend/parent.html');
        cy.get('.traversal-mark').parent().should('contain','Morbi leo risus');
    })

    it('Verify Element Traversal - Parents', ()=>{

        cy.visit('cypress/frontend/parent.html');
        cy.get('.traversal').parents().should('match','blockquote');
    })

    it('Verify Element Traversal - ParentsUntil', ()=>{

        cy.visit('cypress/frontend/parent.html');
        cy.get('.nav.clothes-nav').find('.active').parentsUntil('.clothes-nav').should('have.length', 2);
    })

    it('Verify Element Traversal - Prev', ()=>{

        cy.visit('cypress/frontend/parent.html');
        cy.get('.menu').find('.active').prev().should('contain','Shirts');
    })

    it('Verify Element Traversal - PrevAll', ()=>{

        cy.visit('cypress/frontend/lists.html');
        cy.get('.healthy-foods').find('.3rd').prevAll().should('have.length', 2);
    })

    it('Verify Element Traversal - PrevUntil', ()=>{

        cy.visit('cypress/frontend/lists.html');
        cy.get('.healthy-foods').find('#nuts').prevUntil('#veggies').should('have.length', 3);
    })

    it('Verify Element Traversal - Siblings', ()=>{

        cy.visit('cypress/frontend/lists.html');
        cy.get('.order-list .active').siblings().should('have.length', 4);
    })

    it.only('Verify Element Traversal - End', ()=>{

        cy.visit('https://example.cypress.io/commands/misc');
        cy.get('.table.table-bordered.misc-table').within(()=>{
            cy.contains('Cheryl').click().end();
            cy.contains('User: Darryl').click();
        })
    })










})