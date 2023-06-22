export function login(user) {
    
    cy.visit('/login');
    
    cy.log('Authorize user')
    cy.get('#email').type(user.email);
    cy.get('[type="password"]').type(user.password);
    cy.get('[type="submit"]').click();
};

