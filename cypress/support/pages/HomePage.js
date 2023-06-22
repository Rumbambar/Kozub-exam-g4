class HomePage {
    visit(){
        cy.visit('/search/');
    }

    getAccountButton(){
        return cy.contains( 'Account' );
    }
}
export default new HomePage();