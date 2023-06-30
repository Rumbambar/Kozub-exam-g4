
import user from '../fixtures/user.json'
import { login } from '../support/helper.js'
import loginPage from "../support/pages/LoginPage"

 user.confirm = (user.password);

it('registration', () => {
    cy.visit("/register");
    loginPage.singInButtonDismiss().click();
    cy.get('#emailControl').type(user.email);
    cy.get('#passwordControl').type(user.password);
    cy.get('#repeatPasswordControl').type(user.confirm);
    cy.get('#mat-select-0').click().type(user.answer);
    cy.get('#securityAnswerControl').type(user.securityanswercontrol);
    cy.get('[type="submit"]').click();

    login(user);
})