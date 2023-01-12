describe('Network Request Demo', ()=>{

    it('Verify XHR request using TDD approach', ()=>{

        cy.request('https://reqres.in/api/users').should((response) =>{
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('total').and.be.eq(12);
            expect(response).to.have.property('headers');
            expect(response).to.have.property('duration');
            expect(response.headers).to.have.property('cache-control','max-age=14400');
        })
    })

    it('Verify XHR request using BDD approach', ()=>{

        cy.request('https://reqres.in/api/users').then((response) =>{
            expect(response).property('status').to.equal(200);
            expect(response).property('body').to.have.property('total').and.be.eq(12);
            expect(response).to.include.keys('headers','duration');
            expect(response).property('headers').to.have.property('cache-control','max-age=14400');
        })
    })

    it('Verify Request with query parameters', ()=>{

        cy.request({url:'https://demoqa.com/BookStore/v1/Book', qs:{ISBN:9781449325862}})
        .its('body').should('not.be.an','array').and('contain', {
            isbn:"9781449325862",title:"Git Pocket Guide"
        })
    })

    it('Verify capture data from first request and use it second request', ()=>{

        cy.request('https://jsonplaceholder.cypress.io/comments/500')
        .its('body')
        .then((comment)=>{
            expect(comment).property('id').to.be.a('number');
            cy.request('POST', 'https://jsonplaceholder.cypress.io/comments', {
               id:comment.id+1,
               name:"Cypress",
               email:"cypress@gmail.com",
               body:"Cypress Test Runner"
            })

        }).then((response)=>{
            expect(response).property('status').to.equal(201);
            expect(response).property('body').to.contain({
                name:"Cypress"
            });
            expect(response.body).property('id').to.be.a('number').and.to.be.gt(100);
        })
    })

    it('Verify capture response in shared test context', ()=>{

        cy.request('https://jsonplaceholder.cypress.io/comments/500')
        .its('body')
        .as('data')
        .then(function(){
        
            cy.request('POST','https://jsonplaceholder.cypress.io/comments', {
               id:this.data.id+1,
               name:"Cypress",
               email:"cypress@gmail.com",
               body:"Cypress Test Runner"

            }).its('body').as('post');

        }).then(function(){
            expect(this.post, 'post has the right id').property('id').to.equal(this.data.id+1);
        })
    })

    it('Verify intercept - route response to matching request', ()=>{

        cy.visit('https://example.cypress.io/commands/network-requests');
        //Get
        cy.intercept('GET', '**/comments/*').as('getMethod');
        cy.get('.network-btn.btn.btn-primary').click();
        cy.wait('@getMethod').its('response').its('statusCode').should('be.oneOf',[200, 304]);
        //Post
        cy.intercept('POST', '**/comments').as('postMethod');
        cy.get('.network-post.btn.btn-success').click();
        cy.wait('@postMethod').should(({request, response})=>{
            expect(request).property('body').to.include('email');
            expect(request.headers).to.have.property('content-type');
            expect(response && response.body).to.have.property('name', 'Using POST in cy.intercept()')
        })
    })

    it('Verify intercept - stub a response', ()=>{
        let message = 'Sorry, this comment does not exist';
        cy.visit('https://example.cypress.io/commands/network-requests');
        cy.intercept({
            method:'PUT',
            url: '**/comments/*'
        },{
            statusCode:404,
            body:{
                error:message
            },
            headers: {'access-control-allow-origin': '*' },
            delay:500
        }).as('putMethod');
        cy.get('.network-put.btn.btn-warning').click();
        cy.wait('@putMethod');
        cy.get('.network-put-comment').should('contain', message);
    })

})