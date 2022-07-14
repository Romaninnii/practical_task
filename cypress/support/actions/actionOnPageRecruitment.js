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

    interceptCandidateReview() {
        cy.intercept({
            method: 'GET',
            url: '**/recruitment/addCandidate/id/**'}).as('candidateReview')
    }

    waitInterceptCandidateReview(candidate) {
        cy.wait("@candidateReview").then((interception) => {
            cy.wrap(interception.response.statusCode).should("eq", 200);
            cy.wrap(interception.response.body).should("include", candidate.firstName);
            cy.wrap(interception.response.body).should("include", candidate.middleName);
            cy.wrap(interception.response.body).should("include", candidate.lastName);
            cy.wrap(interception.response.body).should("include", candidate.email);
            cy.wrap(interception.response.body).should("include", candidate.contactNumber);
            cy.wrap(interception.response.body).should("include", candidate.jobVacancy);
            cy.wrap(interception.response.body).should("include", candidate.keywords);
            cy.wrap(interception.response.body).should("include", candidate.comment);
            cy.wrap(interception.response.body).should("include", candidate.dateOfApplication);

        });
    }

    interceptVacancyReview() {
        cy.intercept({
            method: 'GET',
            url: '**/recruitment/addJobVacancy/Id/**'}).as('vacancyReview')
    }

    waitInterceptVacancyReview(vacancy) {
        cy.wait("@vacancyReview").then((interception) => {
            cy.wrap(interception.response.statusCode).should("eq", 200);
            cy.wrap(interception.response.body).should("include", vacancy.jobTitle);
            cy.wrap(interception.response.body).should("include", vacancy.vacancyName);
            cy.wrap(interception.response.body).should("include", vacancy.hiringManager);
            cy.wrap(interception.response.body).should("include", vacancy.numberOfPositions);
            cy.wrap(interception.response.body).should("include", vacancy.description);
        });
    }



    addAndFillVacancyReviewFields(vacancy) {
        action.clickOnButtonAdd()
        this.selectVacancyJobTitle(vacancy.jobTitle)
        this.fillVacancyNameField(vacancy.vacancyName)
        this.fillVacancyHiringManagerField(vacancy.hiringManager)
        this.fillVacancyNumberOfPositionsField(vacancy.numberOfPositions)
        this.fillVacancyDescriptionField(vacancy.description)
        this.interceptVacancyReview()
        action.clickOnButtonSave()
        action.clickOnButtonBack()
        this.waitInterceptVacancyReview(vacancy)
    }

    updateVacancyReviewFields(vacancy) {
        action.clickOnButtonEdit()
        this.selectVacancyJobTitle(vacancy.jobTitle)
        this.fillVacancyNameField(vacancy.vacancyName)
        this.fillVacancyHiringManagerField(vacancy.hiringManager)
        this.fillVacancyNumberOfPositionsField(vacancy.numberOfPositions)
        this.fillVacancyDescriptionField(vacancy.description)
        this.interceptVacancyReview()
        action.clickOnButtonSave()
        action.clickOnButtonBack()
        this.waitInterceptVacancyReview(vacancy)
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
        this.interceptCandidateReview()
        action.clickOnButtonSave()
        action.clickOnButtonBack()
        this.waitInterceptCandidateReview(candidate)
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
        this.interceptCandidateReview()
        action.clickOnButtonSave()
        action.clickOnButtonSaveChanges()
        action.clickOnButtonBack()
        this.waitInterceptCandidateReview(candidate)
    }

}

export default ActionOnPageRecruitment