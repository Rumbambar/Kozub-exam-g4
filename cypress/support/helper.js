export function login(user) {

    cy.visit('/login');

    cy.log('Authorize user')
    cy.get('#email').type(user.email);
    cy.get('[type="password"]').type(user.password);
    cy.get('[type="submit"]').contains('Log in').click();
};


export function findProduct(productName) {
    cy.get(`.mat-grid-tile-content:contains(${productName})`).within(() => {
        cy.contains('Add to Basket').click();
    })
    cy.get('.mat-button-wrapper').contains('Your Basket').click();
    cy.get('.svg-inline--fa.fa-minus-square.fa-w-14').click()
    cy.focused().click();
    cy.get('#checkoutButton').click();
}



