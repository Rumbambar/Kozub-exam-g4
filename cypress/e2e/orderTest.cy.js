/// <reference types="cypress"/>
// import {login} from '../support/helper.js'
// import user from '../fixtures/user.json'
// import HomePage from "../support/pages/HomePage"
 //import loginPage from "../support/pages/HomePage"

it('order test', () => {
    cy.visit('/search')
    cy.get('.mat-focus-indicator.close-dialog.mat-raised-button.mat-button-base.mat-primary.ng-star-inserted').click();
    cy.get('[src$="assets/public/images/products/apple_juice.jpg"]')
    .parents()
    .should('contain', 'style')
    .parents()
    .should('contain','color')
    .parents()
    
    //cy.get('[aria-label="Show the shopping cart"').click();

})