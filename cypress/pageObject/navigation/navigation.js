class Navigation {

    navigationMenu(page) {
        cy.get('li').contains(page).click()
    }
}

export default Navigation