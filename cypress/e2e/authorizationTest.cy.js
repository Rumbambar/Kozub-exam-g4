import HomePage from "../support/pages/HomePage"
import loginPage from "../support/pages/LoginPage"
import user from '../fixtures/user.json'
 

it('registration test', () => {
  HomePage.visit();
  loginPage.singInButtonDismiss();
  loginPage.signInButton();
  loginPage.singInButtonLogin();
  loginPage.submitLoginForm(user.email, user.password);
});
