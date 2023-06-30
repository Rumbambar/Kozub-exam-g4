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
    findProduct('Apple Pomace');

    cy.log('Add new address')
    OrderPage.addAddressButton().click();
    cy.get('[placeholder="Please provide a country."]').type(data.country);
    cy.get('[placeholder="Please provide a name."]').type(data.name);
    cy.get('[placeholder="Please provide a mobile number."]').type(data.mobilenumber);
    cy.get('[placeholder="Please provide a ZIP code."]').type(data.zipcode);
    cy.get('[placeholder="Please provide an address."]').type(data.address);
    cy.get('[placeholder="Please provide a city."]').type(data.city);
    OrderPage.submitAddressButton().click()

    cy.log('Select an address')
    OrderPage.selectAnAddressButton().eq(0).click();
    OrderPage.submitCountineButton().click();

    cy.log('Delivery address')
    OrderPage.selectDeliveryAddress().click();
    OrderPage.submitDeliveryCountineButton().click();

    cy.log('Add new card')
    OrderPage.addNewCardButton().click();
    cy.get('[type="text"]').eq(1).type('Maxim');
    cy.get('[type="number"]').type('4149414141414141');
    cy.get('.mat-input-element').eq(3).select(1);
    cy.get('.mat-input-element').eq(4).select(2);
    OrderPage.submitNewCardButton().click();
    
    OrderPage.selectPaymentOption().eq(0).click();
    OrderPage.submitCountineButton().click();
    
    cy.get('#checkoutButton').contains('Place your order and pay').click();
    cy.get('.confirmation').should('contain', 'Thank you for your purchase!');
})