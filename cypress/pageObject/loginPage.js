import userLogin from "./dataBase/userLogin.json"

class LoginPage {
    visitAndLoginIntoPage () {
        cy.visit('http://test.biz.ua/symfony/web/index.php/auth/login')
        cy.get('#txtUsername').type(userLogin.username)
        cy.get('#txtPassword').type(userLogin.password)
        cy.get('#btnLogin').click()
    }
}
export default LoginPage