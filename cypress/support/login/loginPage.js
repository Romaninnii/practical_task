
class LoginPage {
    visitAndLoginIntoPage (user) {
        cy.visit('http://test.biz.ua/symfony/web/index.php/auth/login')
        cy.get('#txtUsername').type(user.username)
            .should('contain.value', user.username)
        cy.get('#txtPassword').type(user.password)
            .should('contain.value', user.password)
        cy.get('#btnLogin').click()
    }
}
export default LoginPage