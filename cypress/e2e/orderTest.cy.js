/// <reference types="cypress"/>
import { login, findProduct } from '../support/helper.js'
import user from '../fixtures/user.json'
import loginPage from "../support/pages/LoginPage.js"
import data from '../fixtures/data.json'
import OrderPage from "../support/pages/OrderPage.js"



it('order test', () => {
    cy.visit('/login')
    loginPage.singInButtonDismiss().click();
    login(user);
    findProduct(' Apple Juice (1000ml) ');

    cy.log('Add new address')
    OrderPage.addAddressButton().click();
    OrderPage.inputCountry().type(data.country);
    OrderPage.inputName().type(data.name);
    OrderPage.inputMobileNumber().type(data.mobilenumber);
    OrderPage.inputZipCode().type(data.zipcode);
    OrderPage.inputAddress().type(data.address);
    OrderPage.inputCity().type(data.city);
    OrderPage.submitAddressButton().click()

    cy.log('Select an address')
    OrderPage.selectAnAddressButton().eq(0).click();
    OrderPage.submitCountinueButton().click();

    cy.log('Delivery address')
    OrderPage.selectDeliveryAddress().click();
    OrderPage.submitDeliveryCountinueButton().click();

    cy.log('Add new card')
    OrderPage.addNewCardButton().click();
    OrderPage.enterName();
    OrderPage.enterCardNumber();
    OrderPage.enterExpiryMounth();
    OrderPage.enterExpiryYear();
    OrderPage.submitNewCardButton().click();

    OrderPage.selectPaymentOption().eq(0).click();
    OrderPage.submitCountinueButton().click();

    OrderPage.submitOrderAndPatButton().click();
    OrderPage.notificationPurchase();
})