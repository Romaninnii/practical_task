import LoginPage from "../../support/login/loginPage";
import Navigation from "../../support/navigation/navigation";
import ActionOnPageRecruitment from "../../support/actions/actionOnPageRecruitment";
import dataBase from "../../fixtures/dataBase/dataBase.json";
import navBar from "../../fixtures/navigation/navBar.json"
import userLogin from "../../fixtures/loginUsers/yablonskyi.json"
import navMenu from "../../fixtures/navigation/navMenu.json"


const loginPage = new LoginPage()
const navigation = new Navigation()
const recruitmentPageElement = new ActionOnPageRecruitment()





describe('It add, update and delete "Candidate" review ', () => {
    it('Visit main page, select item "Recruitment" then item "Candidates" and firstly add "Candidates" then update it and after that delete.', ()=> {
        loginPage.visitAndLoginIntoPage(userLogin)
        navigation.navigationMenu(navBar.recruitment)
        navigation.navigationInsideParagraphMenu(navMenu.recruitment.candidates)
        recruitmentPageElement.addAndFillCandidateReviewFields(dataBase.candidateInfo)
        recruitmentPageElement.searchCandidateOnPage(dataBase.candidateInfo)
        recruitmentPageElement.selectFirstObjectOnPage(dataBase.candidateInfo.lastName)
        recruitmentPageElement.updateCandidateReviewFields(dataBase.updateCandidateInfo)
        recruitmentPageElement.searchCandidateOnPage(dataBase.updateCandidateInfo)
        recruitmentPageElement.deleteObjectOnPage()
    })
})




