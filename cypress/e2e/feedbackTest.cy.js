import loginPage from "../support/pages/LoginPage.js"
import FeedbackPage from "../support/pages/FeedbackPage.js"

it('feedback test', () => {
    cy.visit('/contact')
    loginPage.singInButtonDismiss().click();
    FeedbackPage.commentField();
    FeedbackPage.raitingField();
    FeedbackPage.capthaField();
    FeedbackPage.submitbButtonField().click();
    FeedbackPage.notificationaAboutFeedback();
})