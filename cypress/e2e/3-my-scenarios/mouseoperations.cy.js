describe('Mouse Operations Demo', ()=>{

    it('Verify Mouse Hover', ()=>{

        cy.visit('https://demo.opencart.com/');
        cy.get('.nav.navbar-nav > li:nth-child(1) > a').trigger('mouseover').click();
        cy.xpath('//ul[@class="list-unstyled"]//li//a[text()="Mac (1)"]').should('be.visible');
    })

    it('Verify Right Click', ()=>{

        cy.visit('http://swisnl.github.io/jQuery-contextMenu/demo.html');
        // Approach 1
        cy.get('.context-menu-one.btn.btn-neutral').trigger('contextmenu');
        // Aprroach 2
        //cy.get('.context-menu-one.btn.btn-neutral').rightclick();
        cy.get('.context-menu-item.context-menu-icon.context-menu-icon-copy').should('be.visible');
    })

    it('Verify Double Click', ()=>{

        cy.visit('https://demo.guru99.com/test/simple_context_menu.html');
        // Approach 1
        cy.get('button[ondblclick="myFunction()"]').trigger('dblclick');
        // Approach 2
        //cy.get('button[ondblclick="myFunction()"]').dblclick();
        cy.on('window:alert', (obj)=>{
            expect(obj).to.contains('You double clicked me.. Thank You..');
        })
    })

    it('Verify Drag and Drop', ()=>{

        cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html');
        cy.get('#box6').drag('#box106',{force:true});
        cy.wait(5000);
    })
   
})

