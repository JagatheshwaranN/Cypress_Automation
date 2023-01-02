describe('File Upload Demo', ()=>{

    it('Verify File Upload - Normal', ()=>{

        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get('#file-upload').attachFile('Test1.pdf');
        cy.get('#file-submit').click();
        cy.wait(3000);
        cy.get('#uploaded-files').contains('Test1.pdf');
    })

    it('Verify File Upload - Rename File', ()=>{

        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get('#file-upload').attachFile({filePath:'Test1.pdf', fileName:'Demo.pdf'});
        cy.get('#file-submit').click();
        cy.wait(3000);
        cy.get('#uploaded-files').contains('Demo.pdf');
        cy.wait(3000);
    })

    it('Verify File upload - Drag and Drop', ()=>{

        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get('#drag-drop-upload').attachFile('Test1.pdf',{subjectType:'drag-n-drop'});
        cy.get('#drag-drop-upload .dz-filename > span').contains('Test1.pdf');
    })

    it('Verify Multiple Files Upload', ()=>{

        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php');
        cy.get('#filesToUpload').attachFile(['Test1.pdf', 'Test2.pdf']);
        cy.get('#fileList').should('be.visible');
    })

    it.only('Verify File Upload - Shadow DOM', ()=>{

        cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm');
        cy.get('.smart-browse-input',{includeShadowDom:true}).attachFile('Test1.pdf');
        cy.wait(3000);
        cy.get('.smart-item-name', {includeShadowDom:true}).contains('Test1.pdf');
    })

})