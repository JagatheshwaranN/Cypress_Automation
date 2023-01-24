describe ('DOM Demo', ()=>{

it('Verify element is attached', ()=>{

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php');
    cy.get('.oxd-input.oxd-input--active').first().then(($ele)=> {
        Cypress.dom.isAttached($ele);
        cy.log(Cypress.dom.isAttached($ele));
    })
})

it('Verify element is descendent', ()=>{

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php');
    cy.get('.oxd-button.oxd-button--medium.oxd-button--main.orangehrm-login-button').then(($ele)=>{
        Cypress.dom.isDescendent($ele.parent(), $ele);
        cy.log(Cypress.dom.isDescendent($ele.parent(), $ele));
    })
})

it('Verify element is detached', ()=>{

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php');
    cy.get('input[name="password"]').then(($ele)=>{
        Cypress.dom.isDetached($ele);
        cy.log(Cypress.dom.isDetached($ele));
    })
})

it('Verify element is document', ()=>{

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php');
    cy.get('.orangehrm-login-branding > img').then(($ele)=>{
        Cypress.dom.isDocument($ele);
        cy.log(Cypress.dom.isDocument($ele));
    })
})

it('Verify element is DOM', ()=>{

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php');
    cy.get('body').then(($ele)=>{
        Cypress.dom.isDom($ele);
        cy.log(Cypress.dom.isDom($ele));
    })
})

it('Verify object is element', ()=>{

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php');
    cy.get('head').then(($ele)=>{
        Cypress.dom.isElement($ele);
        cy.log(Cypress.dom.isElement($ele));
    })
})

it('Verify element is focusable', ()=>{

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php');
    cy.get('.oxd-input.oxd-input--active').first().then(($ele)=>{
        Cypress.dom.isFocusable($ele);
        cy.log(Cypress.dom.isFocusable($ele));
    })
})

// Not working for positive scenario
it('Verify element is focused', ()=>{

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php');
    cy.get('.oxd-input.oxd-input--active').first().then(($ele)=>{
        Cypress.dom.isFocused($ele);
        cy.log(Cypress.dom.isFocused($ele));
    })
    cy.get('.oxd-input.oxd-input--active').first().click().should('have.class','oxd-input oxd-input--focus');
})

it('Verify element is hidden', ()=>{

    cy.visit('https://courses.letskodeit.com/practice');
    cy.get('#hide-textbox').click();
    cy.get('input[name="show-hide"]').then(($ele)=>{
        Cypress.dom.isHidden($ele);
        cy.log(Cypress.dom.isHidden($ele));
    })
})

it('Verify element is jquery element', ()=>{

    cy.visit('https://courses.letskodeit.com/practice');
    cy.get('#radio-btn-example').then(($ele)=>{
        Cypress.dom.isJquery($ele);
        cy.log(Cypress.dom.isJquery($ele));
    })
})

})