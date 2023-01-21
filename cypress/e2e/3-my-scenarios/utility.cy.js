context ('Utility Demo', ()=>{

it('Verify Utility Demo - Chain', ()=>{

cy.request('https://jsonplaceholder.cypress.io/users')
.then((response)=> {
let ids = Cypress._.chain(response.body).map('id').take(5).value();
expect(ids).to.deep.eq([1,2,3,4,5]);
})

cy.request('https://gorest.co.in/public/v2/users')
.then((response)=> {
let ids = Cypress._.chain(response.body).map('id').take(3).value();
expect(ids).to.deep.eq([3198,3194,3193]);
})
})

// Not working - Getting undefined error, Jquery have issue with Cypress as per forum information
it('Verify Jquery Selector', ()=>{

cy.visit('https://letcode.in/selectable');
let $val = Cypress.$('.ui-selectable');
cy.wrap($val).should('not.have.class', 'ui-selected')
.click().should('have.class', 'ui-selected');        
})

// Not sure about the use case
it('Verify Blob Utility', ()=>{

cy.visit('cypress/frontend/parent.html');
cy.get('.utility-blob').then(($div)=>{
return Cypress.Blob
.imgSrcToDataURL('https://miro.medium.com/max/720/1*LjR0UrFB2a__5h1DWqzstA.webp', undefined, 'anonymous')
.then((data)=>{
    let img = Cypress.$('<img/>', {src:data});
    $div.append(img);
    cy.get('.utility-blob img').should('have.attr','src', data);
})
})
})

it('Verify Minimatch', ()=> {

let match1 = Cypress.minimatch('reqres.in/api/user','reqres.in/*/user', { matchBase:true});
expect(match1).to.be.true;
let match2 = Cypress.minimatch('reqres.in/api/user/1','reqres.in/*/user', {matchBase:true});
expect(match2).to.be.false;
let match3 = Cypress.minimatch('reqres.in/api/user/search?id=1&name=john','reqres.in/api/**', {matchBase:true});
expect(match3).to.be.true;
let match4 = Cypress.minimatch('reqres.in/api/user/search?id=1&name=john','reqres.in/api/*', {matchBase:false});
expect(match4).to.be.false;
})

it('Verify Promise', ()=>{

let waited = false;
function waitForSomeTime() {
    return new Cypress.Promise((resolve, reject)=>{
        setTimeout(()=>{
            waited = true;
            resolve('some');
        }, 1000)
    }).then(function(str){
        return new Cypress.Promise((resolve, reject)=>{
            setTimeout(()=>{
                str+='thing';
                resolve(str);
            },1000);
        })
    })
}

cy.then(()=>{
    return waitForSomeTime().then((data)=>{
        expect(data).to.eq('something');
        expect(waited).to.be.true;
    })
})
})

})