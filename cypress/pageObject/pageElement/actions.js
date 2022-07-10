class Actions {
    clickOnButtonAdd() {
        cy.get('[value="Add"]').click()
    }

    clickOnButtonSave() {
        cy.get('[value="Save"]').click()
    }

    clickOnButtonEdit() {
        cy.get('[value="Edit"]').scrollIntoView().click()
    }

    clickOnButtonBack() {
        cy.get('[value="Back"]').click()
    }

    clickOnButtonCancel() {
        cy.get('[value="Cancel"]').click()
    }

    clickOnButtonSaveChanges() {
        cy.get('#dialogSaveButton').click()
    }
}

export  default  Actions