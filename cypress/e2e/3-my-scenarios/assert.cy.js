context('Assertions Demo', ()=>{

it('Verify implicit assertion', ()=>{

cy.visit('cypress/frontend/parent.html');
cy.get('.assertion-table')
.find('tbody tr:last')
.should('have.class','success')
.find('td')
.first()
.should('have.text','Erica')
.should('contain', 'Erica')
.should('have.html','Erica')
.should('match', 'td');
cy.get('.assertion-table')
.find('tbody tr:last')
.contains('td','Erica')
.should('be.visible');
})

it('Verify explicit assertion', ()=>{

expect(true).to.be.true;
const obj = {foo : 'bar'};
expect(obj).to.eq(obj);
expect(obj).to.deep.equal({foo : 'bar'});
expect('FooBar').to.match(/bar$/i);
})

it('Verify assertion with call back', ()=>{

cy.visit('cypress/frontend/parent.html');
cy.get('.assert-p').find('p')
.should(($p)=>{
    const texts = $p.map((i, el) => Cypress.$(el).text());
    const para = texts.get();
    expect(para).to.have.length(3);
    expect(para).to.deep.eq([
        'Life is a beautiful journey',
        'Love everyone and do not ignore anyone',
        'Be a reason for someones happiness'
    ]);
})      
})

it('Verify assertion of element class name', ()=>{

cy.visit('cypress/frontend/parent.html');
cy.get('.header').find('div')
.should(($div)=>{
    expect($div).to.have.length(1);
    const className = $div[0].className;
    expect(className).to.match(/heading-/);
}).then(($div)=> {
    expect($div).to.have.text('Cypress Assertions');
})
})

it('Verify assertion of element throw error', ()=>{

cy.visit('cypress/frontend/parent.html');
cy.get('.error').find('div')
.should(($div)=>{
    expect($div).to.have.length(1);
    if($div.length!==1){

        throw new Error('Did not find given element');
    }
    const className = $div[0].className;
    if(!className.match(/error-/)) {
        throw new Error(`Could not find class "error-" in ${className}`);
    }
})
})

it('Verify assertion match for two unknown elements', ()=>{
let text;
const normalizeText = (s) => s.replace(/\s/g, '').toLowerCase();
cy.visit('cypress/frontend/parent.html');
cy.get('.elements').find('.one')
.then(($one)=>{
    text = normalizeText($one.text());
});
cy.get('.elements').find('.two')
.then(($two)=>{
    const text2 = normalizeText($two.text());
    expect(text2).to.equal(text);
})
})

it('Verify type of the object', ()=>{

const person = {
    name:'John',
    age: 25
}
assert.isObject(person);
})

it('Verify assertion until it get passed', ()=>{

cy.visit('cypress/frontend/parent.html');
cy.get('#number')
    .should(($div) => {
        const number = parseFloat($div.text());
        expect(number).to.be.gte(1).and.be.lte(10);
}); 
})

})