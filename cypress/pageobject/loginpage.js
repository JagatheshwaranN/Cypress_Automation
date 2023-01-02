class LoginPage {

    setUserName(username) {
        cy.get('input[name="username"]').type(username);
    }

    setPassword(password) {
        cy.get('input[name="password"]').type(password);
    }

    clickLogin(){
        cy.get('.oxd-button.oxd-button--medium.oxd-button--main.orangehrm-login-button').click();
        cy.wait(5000);
    }

    verifyLogin() {
        cy.get('img[alt="client brand banner"]').should('be.visible');
    }
}

export default LoginPage;