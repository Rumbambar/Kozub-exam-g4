/// <reference types="cypress"/>
import { login, findProduct } from '../support/helper.js'
import user from '../fixtures/user.json'
import loginPage from "../support/pages/LoginPage.js"
import data from '../fixtures/data.json'



it('order test', () => {
    cy.visit('/login')
    loginPage.singInButtonDismiss().click();
    login(user);
    findProduct('Apple Juice (1000ml)');

    cy.log('Add new address')
    cy.get('.mat-card.mat-focus-indicator').contains('Add New Address').click();
    cy.get('[placeholder="Please provide a country."]').type(data.country);
    cy.get('[placeholder="Please provide a name."]').type(data.name);
    cy.get('[placeholder="Please provide a mobile number."]').type(data.mobilenumber);
    cy.get('[placeholder="Please provide a ZIP code."]').type(data.zipcode);
    cy.get('[placeholder="Please provide an address."]').type(data.address);
    cy.get('[placeholder="Please provide a city."]').type(data.city);
    cy.get('#submitButton').click();

    cy.log('Select an address')
    cy.get('.mat-radio-button.mat-accent').eq(0).click();
    cy.get('.mat-focus-indicator.btn.btn-next').click();

    cy.log('Delivery address')
    cy.get('.mat-cell.cdk-cell.cdk-column-Name').contains(' One Day Delivery').click();
    cy.get('.mat-button-wrapper').contains('Continue').click();

    cy.log('Add new card')
    cy.get('.mat-content.ng-tns-c150-23').contains('Add new card').click();
    cy.get('[type="text"]').eq(1).type('Maxim');
    cy.get('[type="number"]').type('4149414141414141');
    cy.get('.mat-input-element').eq(3).select(1);
    cy.get('.mat-input-element').eq(4).select(2);
    cy.get('#submitButton').click();
    cy.get('.mat-radio-button.mat-accent').eq(0).click();
    cy.get('.mat-button-wrapper').contains('Continue').click();
    cy.get('#checkoutButton').contains('Place your order and pay').click();
    cy.get('.confirmation').should('contain', 'Thank you for your purchase!');





})