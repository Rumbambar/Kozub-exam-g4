class OrderPage {
    addAddressButton() {
        return cy.get('.mat-card.mat-focus-indicator').contains('Add New Address');
    }

    inputCountry() {
        return cy.get('[placeholder="Please provide a country."]');
    }

    inputName() {
        return cy.get('[placeholder="Please provide a name."]');
    }

    inputMobileNumber() {
        return cy.get('[placeholder="Please provide a mobile number."]');
    }

    inputZipCode() {
        return cy.get('[placeholder="Please provide a ZIP code."]');
    }

    inputAddress() {
        return cy.get('[placeholder="Please provide an address."]');
    }

    inputCity() {
        return cy.get('[placeholder="Please provide a city."]');
    }

    submitAddressButton() {
        return cy.get('#submitButton');
    }

    selectAnAddressButton() {
        return cy.get('.mat-radio-button.mat-accent');
    }

    submitCountinueButton() {
        return cy.get('.mat-focus-indicator.btn.btn-next');
    }

    selectDeliveryAddress() {
        return cy.get('.mat-cell.cdk-cell.cdk-column-Name').contains(' One Day Delivery');
    }

    submitDeliveryCountinueButton() {
        return cy.get('.mat-button-wrapper').contains('Continue');
    }

    addNewCardButton() {
        return cy.get('.mat-content.ng-tns-c150-23').contains('Add new card');
    }

    enterName() {
        return cy.get('[type="text"]').eq(1).type('Maxim');
    }

    enterCardNumber() {
        return cy.get('[type="number"]').type('4149414141414141');
    }

    enterExpiryMounth() {
        return cy.get('.mat-input-element').eq(3).select(1);
    }

    enterExpiryYear() {
        return cy.get('.mat-input-element').eq(4).select(2);
    }

    submitNewCardButton() {
        return cy.get('#submitButton');
    }

    submitCountinueButton() {
        return cy.get('.mat-button-wrapper').contains('Continue');
    }

    selectPaymentOption() {
        return cy.get('.mat-radio-button.mat-accent');
    }

    submitOrderAndPatButton() {
        return cy.get('#checkoutButton').contains('Place your order and pay');
    }

    notificationPurchase() {
        return cy.get('.confirmation').should('contain', 'Thank you for your purchase!')
    }

    chooseProduct(productName) {
        return cy.get(`.mat-grid-tile-content:contains(${productName})`).within(() => {
            cy.contains('Add to Basket').click();
        })
    }

    submitBasket() {
        return cy.get('.mat-button-wrapper').contains('Your Basket');
    }

    submitCheckoutButton() {
        return cy.get('#checkoutButton');
    }
}
export default new OrderPage();