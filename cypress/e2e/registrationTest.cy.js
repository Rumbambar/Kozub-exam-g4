import user from '../fixtures/user.json'
import { login } from '../support/helper.js'
import loginPage from "../support/pages/LoginPage"

user.confirm = (user.password);

it('registration', () => {
    cy.visit("/register");
    loginPage.singInButtonDismiss().click();
    loginPage.enterEmail().type(user.email);
    loginPage.enterPassword().type(user.password);
    loginPage.enterDuplicatePassword().type(user.confirm);
    loginPage.ChooseQuestion().click().type(user.answer);
    loginPage.enterSecurityanswrrControl().type(user.securityanswercontrol);
    loginPage.submitButton().click();

    login(user);
})