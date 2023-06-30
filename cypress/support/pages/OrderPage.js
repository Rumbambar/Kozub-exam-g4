class OrderPage {
    addAddressButton() {
        return cy.get('.mat-card.mat-focus-indicator').contains('Add New Address');
    }

    submitAddressButton() {
        return cy.get('#submitButton');
    }

    selectAnAddressButton() {
        return cy.get('.mat-radio-button.mat-accent');
    }

    submitCountineButton() {
        return cy.get('.mat-focus-indicator.btn.btn-next');
    }

    selectDeliveryAddress() {
        return cy.get('.mat-cell.cdk-cell.cdk-column-Name').contains(' One Day Delivery');
    }  
    
    submitDeliveryCountineButton() {
        return cy.get('.mat-button-wrapper').contains('Continue');
    }

    addNewCardButton() {
        return cy.get('.mat-content.ng-tns-c150-23').contains('Add new card');
    }

    submitNewCardButton() {
        return cy.get('#submitButton');
    }
    
    selectPaymentOption() {
        return cy.get('.mat-radio-button.mat-accent');
    }

    submitCountineButton() {
        return cy.get('.mat-button-wrapper').contains('Continue');
    }
}
export default new OrderPage();