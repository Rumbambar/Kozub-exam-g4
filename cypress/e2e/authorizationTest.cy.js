import HomePage from "../support/pages/HomePage"
import loginPage from "../support/pages/LoginPage"
import user from '../fixtures/user.json'


it('registration test', () => {
  HomePage.visit();
  loginPage.singInButtonDismiss().click();
  loginPage.signInButton().click();
  loginPage.singInButtonLogin().click();
  loginPage.submitLoginForm(user.email, user.password);
});
