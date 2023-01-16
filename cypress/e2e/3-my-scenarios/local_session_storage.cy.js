describe('Local Storage Demo', ()=>{

    it('Verify Local Storage - Set and Get Local Storage', ()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php');
        cy.log('Actual local storage count : '+localStorage.length);
        cy.log('Setting up cypress data in local storage');
        localStorage.setItem('cypress', 'test');
        cy.log('After setting up cypress data, local storage count : '+localStorage.length);
        cy.log(localStorage.getItem('cypress'));
        for(var i = 0; i< localStorage.length; i++) {
            cy.log(localStorage.key(i));
        }
    })

    it('Verify Local Storage - Remove Local Storage - Type 1', ()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php');
        cy.log('Actual local storage count : '+localStorage.length);
        cy.log('Setting up cypress data in local storage');
        localStorage.setItem('cypress', 'test');
        cy.log('After setting up cypress data, local storage count : '+localStorage.length);
        localStorage.removeItem('cypress');
        cy.wait(1000).then(()=>{
            expect(localStorage.getItem('cypress')).to.be.null;
        })
        
    })

    it('Verify Local Storage - Clear Local Storage - Type 1', ()=>{

        cy.visit('https://demo.nopcommerce.com/');
        cy.log('Actual local storage count : '+localStorage.length);
        localStorage.setItem('cypress', 'test');
        cy.log('After setting up cypress data, local storage count : '+localStorage.length);
        localStorage.clear();
        cy.wait(1000).then(()=>{
            expect(localStorage.getItem('cypress')).to.be.null;
            expect(localStorage.length).to.equal(0);
        })
    })

    it('Verify Local Storage - Remove Local Storage - Type 2', ()=>{
        
        cy.visit('https://demo.nopcommerce.com/');
        cy.log('Actual local storage count : '+localStorage.length);
        localStorage.setItem('cypress', 'test');
        cy.log('After setting up cypress data, local storage count : '+localStorage.length);
        cy.removeLocalStorage('cypress')
        cy.wait(1000).then(()=>{
            expect(localStorage.getItem('cypress')).to.be.null;
            expect(localStorage.length).to.equal(0);
        })
    })

    it('Verify Local Storage - Clear Local Storage - Type 2', ()=>{
        
        cy.visit('https://demo.nopcommerce.com/');
        cy.log('Actual local storage count : '+localStorage.length);
        localStorage.setItem('cypress', 'test');
        cy.log('After setting up cypress data, local storage count : '+localStorage.length);
        cy.clearLocalStorage();
        cy.wait(1000).then(()=>{
            expect(localStorage.getItem('cypress')).to.be.null;
            expect(localStorage.length).to.equal(0);
        })
    })

    it('Verify Local Storage - Save Local Storage', ()=>{
        
        cy.visit('https://demo.nopcommerce.com/');
        cy.log('Actual local storage count : '+localStorage.length);
        localStorage.setItem('cypress', 'test');
        cy.log('After setting up cypress data, local storage count : '+localStorage.length);
        cy.saveLocalStorage('lsCopy')
        cy.wait(1000).then(()=>{
            expect(localStorage.getItem('cypress')).to.equal('test');
        })
    })

    it('Verify Local Storage - Restore Local Storage', ()=>{
        
        cy.visit('https://demo.nopcommerce.com/');
        cy.log('Actual local storage count : '+localStorage.length);
        cy.restoreLocalStorage('lsCopy');
        cy.wait(1000).then(()=>{
            cy.log('Actual local storage count : '+localStorage.length);
            expect(localStorage.getItem('cypress')).to.equal('test');  
        })
    })

   // getLocalStorage () - Is not working


})