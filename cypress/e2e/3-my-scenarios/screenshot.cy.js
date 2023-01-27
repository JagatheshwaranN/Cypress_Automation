describe('Capture Screenshot Demo', ()=>{

it('Verify capture screenshot demo', ()=>{

    cy.visit('https://demo.opencart.com/');
    cy.screenshot('opencart');
    cy.get('#menu').screenshot('opencart_menu');
})

it.only('Verify capture screenshot demo with options', ()=>{

    cy.visit('https://demo.opencart.com/');
    cy.screenshot('opencart', {overwrite:true});
    cy.get('#menu').screenshot('opencart_menu_padding', {padding: 20});
})

it('Cypress.Screenshot.defaults() - change default config of screenshots', function () {
    Cypress.Screenshot.defaults({
        blackout: ['.foo'],
        capture: 'viewport',
        clip: { x: 0, y: 0, width: 200, height: 200 },
        scale: false,
        disableTimersAndAnimations: true,
        screenshotOnRunFailure: true,
        onBeforeScreenshot () { },
        onAfterScreenshot () { },
    })
    })

})