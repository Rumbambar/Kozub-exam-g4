import {faker} from '@faker-js/faker'
import user from '../fixtures/user.json'
import {login} from '../support/helper.js'
import loginPage from "../support/pages/LoginPage"


user.email = faker.internet.email({ firstName: 'max', lastName: 'kozub', provider: 'gmail.com' })
user.password = faker.internet.password({ length: 20, memorable: true, pattern: /[A-Z]/ });
user.confirm = (user.password);

   

it('authorization test', () => {
    cy.visit("/register");
    loginPage.singInButtonDismiss();
    cy.get('#emailControl').type(user.email);
    cy.get('#passwordControl').type(user.password);
    cy.get('#repeatPasswordControl').type(user.confirm);
    cy.get('#mat-select-0').click().type(user.answer);
    cy.get('#securityAnswerControl').type(user.securityanswercontrol);
    cy.get('[type="submit"]').click();

    login(user);
})