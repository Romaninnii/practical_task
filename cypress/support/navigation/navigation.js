class Navigation {

    navigationMenu(page) {
        cy.get('li').contains(page)
            .should('have.text', page).click()
    }

    navigationInsideParagraphMenu(paragraph) {
        cy.contains(paragraph).click()
            .should('contain.text', paragraph)
    }
}

export default Navigation