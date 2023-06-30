class HomePage {
    visit() {
        cy.visit('/');
    }

    getAccountButton() {
        return cy.contains('Account');
    }
}
export default new HomePage();