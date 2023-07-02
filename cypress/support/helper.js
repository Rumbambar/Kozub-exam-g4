import loginPage from "../support/pages/LoginPage"
import OrderPage from "./pages/OrderPage";
export function login(user) {

    loginPage.visit();

    cy.log('Authorize user')
    loginPage.emailField().type(user.email);
    loginPage.passwordField().type(user.password);
    loginPage.submitLoginButton().click();
}

export function findProduct(productName) {
    OrderPage.chooseProduct(productName)
    OrderPage.submitBasket().click();
    OrderPage.submitCheckoutButton().click();
}



