describe('Connectors Demo', ()=>{

    it('Verify Connectors - each', ()=>{

        cy.visit('cypress/frontend/lists.html');
        cy.get('.unordered-list > li')
        .each(($el, index, $list) => {
    
            console.log($el.text());
            console.log(index);
            console.log($list);
            cy.log($el.text());
        })
    })

    it('Verify Connectors - its', ()=>{

        cy.visit('cypress/frontend/lists.html');
        cy.get('.unordered-list > li').its('length').should('be.greaterThan', 4);
    })

    it('Verify Connectors - invoke', ()=>{

        cy.visit('https://courses.letskodeit.com/practice');
        cy.get('#displayed-text').invoke('hide').should('be.hidden');
    })

    it('Verify Connect - spread', ()=>{

        const arr = ['apple', 'orange', 'grapes'];
        cy.wrap(arr).spread((apple, orange, grapes)=>{
            expect(apple).to.eq('apple');
            expect(orange).to.eq('orange');
            expect(grapes).to.eq('grapes');
        })
    })

    it('Verify Connectors - then', ()=>{

        cy.visit('cypress/frontend/lists.html');
        cy.get('.unordered-list > li').then((list)=>{
            expect(list).to.have.length(5);
            expect(list.eq(0)).to.contain('Apple');
            expect(list.eq(1)).to.contain('Orange');
        })
    })

    it('Verify Connectors - wrap & then - yields scenario 1', ()=>{

        cy.wrap(1)
        .then((num)=>{
            expect(num).to.equal(1);
            return 2
        }).then((num) => {
            expect(num).to.equal(2);
        })
    })

    it('Verify Connectors - wrap & then - yields scenario 2', ()=>{

        cy.wrap(1)
        .then((num)=>{
            expect(num).to.equal(1);    
        }).then((num) => {
            expect(num).to.equal(1);
        })
    })

    it('Verify Connectors - wrap & then - yields scenario 3', ()=>{

        cy.wrap(1)
        .then((num)=>{
            expect(num).to.equal(1);
            cy.wrap(2);
        }).then((num) => {
            expect(num).to.equal(2);
        })
    })

})