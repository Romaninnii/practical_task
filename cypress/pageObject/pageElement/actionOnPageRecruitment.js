import dataBase from "../dataBase/dataBase.json";
import Actions from "./actions";


const action = new Actions()
const resume = 'hi.docx'
const updateResume = 'hello.docx'


class ActionOnPageRecruitment {

    getAndSelectCandidatesPage() {
        cy.get('#menu_recruitment_viewCandidates').click()
    }

    getAndSelectVacancyPage() {
        cy.get('#menu_recruitment_viewJobVacancy').click()
    }

    getAndSelectVacancyJobTitle(jobTitle) {
        cy.get('[name="addJobVacancy[jobTitle]"]').select(jobTitle)
    }

    getAndFillVacancyName(vacancyNumber) {
        cy.get('[name="addJobVacancy[name]"]').clear().type(vacancyNumber)
    }

    getAndFillVacancyHiringManager(hiringManager) {
        cy.get('[name="addJobVacancy[hiringManager]"]').clear().type(hiringManager).type("{enter}")
    }

    getAndFillVacancyNumberOfPositions(numberOfPositions) {
        cy.get('[name="addJobVacancy[noOfPositions]"]').clear().type(numberOfPositions)
    }

    getAndFillVacancyDescription(description) {
        cy.get('[name="addJobVacancy[description]"]').clear().type(description)
    }

    getAndFillCandidateUserName(username) {
        cy.get('[name="addCandidate[firstName]"]').clear().type(username)
    }

    getAndFillCandidateMiddleName(middleName) {
        cy.get('[name="addCandidate[middleName]"]').clear().type(middleName)
    }

    getAndFillCandidateLastName(lastName) {
        cy.get('[name="addCandidate[lastName]"]').clear().type(lastName)
    }

    getAndFillCandidateEmail(email) {
        cy.get('[name="addCandidate[email]"]').clear().type(email)
    }

    getAndFillCandidateContactNumber(number) {
        cy.get('[name="addCandidate[contactNo]"]').clear().type(number)
    }

    getAndSelectCandidateVacancy(vacancy) {
        cy.get('[name="addCandidate[vacancy]"]').select(vacancy)
    }

    getAndSelectReplaceResume() {
        cy.get('#addCandidate_resumeUpdate_3').click()
    }

    getAndSelectCandidateResume(file) {
        cy.get('[name="addCandidate[resume]"]').attachFile(file)
    }

    getAndFillCandidateKeyWords(keywords) {
        cy.get('[name="addCandidate[keyWords]"]').clear().type(keywords)
    }

    getAndFillCandidateComment(comment) {
        cy.get('[name="addCandidate[comment]"]').clear().type(comment)
    }

    getAndFillCandidateAppliedDate(date) {
        cy.get('[name="addCandidate[appliedDate]"]').clear().type(date)
    }

    searchVacancyOnPage(selectJob,selectVacancy,selectHiring) {
        cy.get('[name="vacancySearch[jobTitle]"]').select(selectJob)
        cy.get('[name="vacancySearch[jobVacancy]"]').wait(1000).select(selectVacancy)
        cy.get('[name="vacancySearch[hiringManager]"]').select(selectHiring)
        cy.get('[value="Search"]').click()
    }

    searchCandidateOnPage(name) {
        const fullName = name.firstName + " " + name.middleName + " " + name.lastName
        cy.get('[name="candidateSearch[candidateName]"]').clear().click().type(fullName).type("{enter}")
        cy.get('[value="Search"]').click()
    }

    selectObjectOnPage(object) {
        cy.get('td').contains(object).first().click()
    }

    deleteObjectOnPage() {
        cy.get('td input').first().click()
        cy.get('#btnDelete').click()
        cy.get('[value="Ok"].btn').should('have.value', 'Ok').click()
    }

    addAndFillVacancyReviewFields() {
        action.clickOnButtonAdd()
        this.getAndSelectVacancyJobTitle(dataBase.VacancyInfo.jobTitle)
        this.getAndFillVacancyName(dataBase.VacancyInfo.vacancyName)
        this.getAndFillVacancyHiringManager(dataBase.VacancyInfo.hiringManager)
        this.getAndFillVacancyNumberOfPositions(dataBase.VacancyInfo.numberOfPositions)
        this.getAndFillVacancyDescription(dataBase.VacancyInfo.description)
        action.clickOnButtonSave()
        action.clickOnButtonBack()
    }

    updateVacancyReviewFields() {
        action.clickOnButtonEdit()
        this.getAndSelectVacancyJobTitle(dataBase.UpdateVacancyInfo.jobTitle)
        this.getAndFillVacancyName(dataBase.UpdateVacancyInfo.vacancyName)
        this.getAndFillVacancyHiringManager(dataBase.UpdateVacancyInfo.hiringManager)
        this.getAndFillVacancyNumberOfPositions(dataBase.UpdateVacancyInfo.numberOfPositions)
        this.getAndFillVacancyDescription(dataBase.UpdateVacancyInfo.description)
        action.clickOnButtonSave()
        action.clickOnButtonBack()
    }

    addAndFillCandidateFields () {
        action.clickOnButtonAdd()
        this.getAndFillCandidateUserName(dataBase.CandidateInfo.firstName)
        this.getAndFillCandidateMiddleName(dataBase.CandidateInfo.middleName)
        this.getAndFillCandidateLastName(dataBase.CandidateInfo.lastName)
        this.getAndFillCandidateEmail(dataBase.CandidateInfo.email)
        this.getAndFillCandidateContactNumber(dataBase.CandidateInfo.contactNumber)
        this.getAndSelectCandidateVacancy(dataBase.CandidateInfo.jobVacancy)
        this.getAndSelectCandidateResume(resume)
        this.getAndFillCandidateKeyWords(dataBase.CandidateInfo.keywords)
        this.getAndFillCandidateComment(dataBase.CandidateInfo.comment)
        this.getAndFillCandidateAppliedDate(dataBase.CandidateInfo.dateOfApplication)
        action.clickOnButtonSave()
        action.clickOnButtonBack()
    }

    updateCandidateFields () {
        action.clickOnButtonEdit()
        this.getAndFillCandidateUserName(dataBase.UpdateCandidateInfo.firstName)
        this.getAndFillCandidateMiddleName(dataBase.UpdateCandidateInfo.middleName)
        this.getAndFillCandidateLastName(dataBase.UpdateCandidateInfo.lastName)
        this.getAndFillCandidateEmail(dataBase.UpdateCandidateInfo.email)
        this.getAndFillCandidateContactNumber(dataBase.UpdateCandidateInfo.contactNumber)
        this.getAndSelectCandidateVacancy(dataBase.UpdateCandidateInfo.jobVacancy)
        this.getAndSelectReplaceResume()
        this.getAndSelectCandidateResume(updateResume)
        this.getAndFillCandidateKeyWords(dataBase.UpdateCandidateInfo.keywords)
        this.getAndFillCandidateComment(dataBase.UpdateCandidateInfo.comment)
        this.getAndFillCandidateAppliedDate(dataBase.UpdateCandidateInfo.dateOfApplication)
        action.clickOnButtonSave()
        action.clickOnButtonSaveChanges()
        action.clickOnButtonBack()

    }


}

export default ActionOnPageRecruitment