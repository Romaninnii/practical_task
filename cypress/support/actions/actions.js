class Actions {
    clickOnButtonAdd() {
        cy.get('[value="Add"]')
            .should('have.value', 'Add')
            .click()

    }

    clickOnButtonSave() {
        cy.get('[value="Save"]')
            .should('have.value', 'Save')
            .click()

    }

    clickOnButtonEdit() {
        cy.get('[value="Edit"]').scrollIntoView()
            .should('have.value', 'Edit')
            .click()

    }

    clickOnButtonBack() {
        cy.get('[value="Back"]')
            .should('have.value', 'Back')
            .click()
    }

    clickOnButtonCancel() {
        cy.get('[value="Cancel"]')
            .should('have.value', 'Cancel')
            .click()
    }

    clickOnButtonSaveChanges() {
        cy.get('#dialogSaveButton')
            .should('have.value', 'Ok')
            .click()
    }
}

export  default  Actions