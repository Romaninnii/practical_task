import dataBase from "../../fixtures/dataBase/dataBase.json";
import Actions from "./actions";


const action = new Actions()
const resume = 'hi.docx'
const updateResume = 'hello.docx'


class ActionOnPageRecruitment {

    selectVacancyJobTitle(jobTitle) {
        cy.get('[name="addJobVacancy[jobTitle]"]').select(jobTitle)
            .should('contain.text', jobTitle)
    }

    fillVacancyNameField(vacancyNumber) {
        cy.get('[name="addJobVacancy[name]"]').clear().type(vacancyNumber)
        .should('have.value', vacancyNumber)
    }

    fillVacancyHiringManagerField(hiringManager) {
        cy.get('[name="addJobVacancy[hiringManager]"]').clear().type(hiringManager).type("{enter}")
        .should('have.value', hiringManager)
    }

    fillVacancyNumberOfPositionsField(numberOfPositions) {
        cy.get('[name="addJobVacancy[noOfPositions]"]').clear().type(numberOfPositions)
        .should('have.value', numberOfPositions)
    }

    fillVacancyDescriptionField(description) {
        cy.get('[name="addJobVacancy[description]"]').clear().type(description)
        .should('have.value', description)
    }

    fillCandidateUserNameField(username) {
        cy.get('[name="addCandidate[firstName]"]').clear().type(username)
        .should('have.value', username)
    }

    fillCandidateMiddleNameField(middleName) {
        cy.get('[name="addCandidate[middleName]"]').clear().type(middleName)
        .should('have.value', middleName)
    }

    fillCandidateLastNameField(lastName) {
        cy.get('[name="addCandidate[lastName]"]').clear().type(lastName)
        .should('have.value', lastName)
    }

    fillCandidateEmailField(email) {
        cy.get('[name="addCandidate[email]"]').clear().type(email)
        .should('have.value', email)
    }

    fillCandidateContactNumberField(number) {
        cy.get('[name="addCandidate[contactNo]"]').clear().type(number)
        .should('have.value', number)
    }

    selectCandidateVacancy(vacancy) {
        cy.get('[name="addCandidate[vacancy]"]').select(vacancy)
        .should('contain.text', vacancy)
    }

    clickReplaceCandidateResume() {
        cy.get('#addCandidate_resumeUpdate_3').click()
    }

    selectCandidateResume(file) {
        cy.get('[name="addCandidate[resume]"]').attachFile(file)
        .should('contain.value', file)
    }

    fillCandidateKeyWordsField(keywords) {
        cy.get('[name="addCandidate[keyWords]"]').clear().type(keywords)
        .should('have.value', keywords)
    }

    fillCandidateCommentField(comment) {
        cy.get('[name="addCandidate[comment]"]').clear().type(comment)
        .should('have.value', comment)
    }

    fillCandidateAppliedDateField(date) {
        cy.get('[name="addCandidate[appliedDate]"]').clear().type(date)
        .should('have.value', date)
    }

    searchVacancyOnPage(selectJob,selectVacancy,selectHiring) {
        cy.get('[name="vacancySearch[jobTitle]"]').select(selectJob)
            .should('contain.text', selectJob)
        cy.get('[name="vacancySearch[jobVacancy]"]').wait(1000).select(selectVacancy)
            .should('contain.text', selectVacancy)
        cy.get('[name="vacancySearch[hiringManager]"]').select(selectHiring)
            .should('contain.text', selectHiring)
        cy.get('[value="Search"]').click()
    }

    searchCandidateOnPage(name) {
        const fullName = name.firstName + " " + name.middleName + " " + name.lastName + " "
        cy.get('[name="candidateSearch[candidateName]"]').clear().click().type(fullName)
            .should('contain.value', fullName)
        cy.get('[value="Search"]').click()
    }

    selectFirstObjectOnPage(object) {
        return cy.get('td').contains(object).first()
            .should('contain.text',object).click()
    }

    deleteObjectOnPage() {
        cy.get('td input').first().click()
        cy.get('#btnDelete').click()
        cy.get('[value="Ok"].btn').should('have.value', 'Ok').click()
    }

    addAndFillVacancyReviewFields(vacancy) {
        action.clickOnButtonAdd()
        this.selectVacancyJobTitle(vacancy.jobTitle)
        this.fillVacancyNameField(vacancy.vacancyName)
        this.fillVacancyHiringManagerField(vacancy.hiringManager)
        this.fillVacancyNumberOfPositionsField(vacancy.numberOfPositions)
        this.fillVacancyDescriptionField(vacancy.description)
        action.clickOnButtonSave()
        action.clickOnButtonBack()
    }

    updateVacancyReviewFields(vacancy) {
        action.clickOnButtonEdit()
        this.selectVacancyJobTitle(vacancy.jobTitle)
        this.fillVacancyNameField(vacancy.vacancyName)
        this.fillVacancyHiringManagerField(vacancy.hiringManager)
        this.fillVacancyNumberOfPositionsField(vacancy.numberOfPositions)
        this.fillVacancyDescriptionField(vacancy.description)
        action.clickOnButtonSave()
        action.clickOnButtonBack()
    }

    addAndFillCandidateReviewFields (candidate) {
        action.clickOnButtonAdd()
        this.fillCandidateUserNameField(candidate.firstName)
        this.fillCandidateMiddleNameField(candidate.middleName)
        this.fillCandidateLastNameField(candidate.lastName)
        this.fillCandidateEmailField(candidate.email)
        this.fillCandidateContactNumberField(candidate.contactNumber)
        this.selectCandidateVacancy(candidate.jobVacancy)
        this.selectCandidateResume(resume)
        this.fillCandidateKeyWordsField(candidate.keywords)
        this.fillCandidateCommentField(candidate.comment)
        this.fillCandidateAppliedDateField(candidate.dateOfApplication)
        action.clickOnButtonSave()
        action.clickOnButtonBack()
    }

    updateCandidateReviewFields (candidate) {
        action.clickOnButtonEdit()
        this.fillCandidateUserNameField(candidate.firstName)
        this.fillCandidateMiddleNameField(candidate.middleName)
        this.fillCandidateLastNameField(candidate.lastName)
        this.fillCandidateEmailField(candidate.email)
        this.fillCandidateContactNumberField(candidate.contactNumber)
        this.selectCandidateVacancy(candidate.jobVacancy)
        this.clickReplaceCandidateResume()
        this.selectCandidateResume(updateResume)
        this.fillCandidateKeyWordsField(candidate.keywords)
        this.fillCandidateCommentField(candidate.comment)
        this.fillCandidateAppliedDateField(candidate.dateOfApplication)
        action.clickOnButtonSave()
        action.clickOnButtonSaveChanges()
        action.clickOnButtonBack()

    }
}

export default ActionOnPageRecruitment