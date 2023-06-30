class LoginPage {
    visit() {
        cy.visit('/');
    }

    singInButtonDismiss() {
        return cy.get('.mat-focus-indicator.close-dialog').contains('Dismiss');
    }

    signInButton() {
        return cy.get('#navbarAccount').contains('Account');
    }

    singInButtonLogin() {
        return cy.get('#navbarLoginButton').contains('Login');
    }

    emailField() {
        return cy.get('#email');
    }

    passwordField() {
        return cy.get('[type="password"]');
    }

    submitLoginButton() {
        return cy.get('[type="submit"]');
    }

    submitLoginForm(email, password) {
        cy.log('Submit login form');


        this.emailField().type(email);
        this.passwordField().type(password);
        this.submitLoginButton().click();
    }
}
export default new LoginPage();