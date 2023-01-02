describe('WebTable Demo', ()=>{

    beforeEach('Login to Open Cart', ()=>{
        
        cy.visit('https://demo.opencart.com/admin/index.php');
        cy.get('#input-username').type('demo');
        cy.get('#input-password').type('demo');
        cy.get('.btn.btn-primary').click();
        cy.wait(3000);
        cy.get('.btn-close').click();
        cy.get('#menu-customer').click();
        cy.get('#menu-customer > ul > li:first-child').click();
    })

    it('Verify WebTable Rows and Columns', ()=>{

        cy.get('.table-responsive').should('be.visible');
        cy.get('tbody > tr').should('have.length', '10');
        cy.get('thead > tr > td').should('have.length', '7');
    })

    it('Verify WebTable Specific Cell Data', ()=>{

        cy.get('table[class="table table-bordered table-hover"] > tbody > tr:nth-child(5) > td:nth-child(3)')
        .contains('princytrainings4@gmail.com');
    })

    it('Verify WebTable All Rows Data', ()=>{

        cy.get('table[class="table table-bordered table-hover"] > tbody > tr').each(($row, _index, _$rows) =>{
            cy.wrap($row).within( ()=>{
                cy.get('td').each(($col, _index, _$cols) =>{
                    cy.log($col.text());
                })
            })
        })

    })

    it('Verify WebTable Data using Pagination', ()=>{

        cy.get('.col-sm-6.text-end').then((ele)=>{
            let pageNumText = ele.text();
            let totalPages = pageNumText.substring(pageNumText.indexOf("(")+1,pageNumText.indexOf("Pages")-1);
            cy.log("totalPages : "+totalPages);

            let pages = 2;
            for (let p=1; p<=pages; p++){

                if(pages > 1){
                    cy.log("Active page is :"+p);
                    cy.get('.pagination > li:nth-child('+p+')').click();
                    cy.wait(3000);
                    cy.get('table[class="table table-bordered table-hover"] > tbody> tr').each(($row, _index, _$rows) =>{
                        cy.wrap($row).within( ()=>{
                            cy.get('td:nth-child(3)').then((e) =>{
                                cy.log(e.text());
                            })
                        })
                    })

                }
            }
        })
    })

})