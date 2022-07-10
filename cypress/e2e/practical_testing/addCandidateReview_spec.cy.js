import LoginPage from "../../pageObject/loginPage";
import Navigation from "../../pageObject/navigation/navigation";
import ActionOnPageRecruitment from "../../pageObject/pageElement/actionOnPageRecruitment";
import dataBase from "../../pageObject/dataBase/dataBase.json";
import navBar from  "../../pageObject/dataBase/navBar.json"

const loginPage = new LoginPage()
const navigation = new Navigation()
const recruitmentPageElement = new ActionOnPageRecruitment()




describe('It add, update and delete "Candidate" review ', () => {
    it('Visit main page, select item "Recruitment" then item "Candidates" and firstly add "Candidates" then update it and after that delete.', ()=> {
        loginPage.visitAndLoginIntoPage()
        navigation.navigationMenu(navBar.Recruitment)
        recruitmentPageElement.getAndSelectCandidatesPage()
        recruitmentPageElement.addAndFillCandidateFields()
        recruitmentPageElement.searchCandidateOnPage(dataBase.CandidateInfo)
        recruitmentPageElement.selectObjectOnPage(dataBase.CandidateInfo.firstName, dataBase.CandidateInfo.middleName, dataBase.CandidateInfo.lastName)
        recruitmentPageElement.updateCandidateFields()
        recruitmentPageElement.searchCandidateOnPage(dataBase.UpdateCandidateInfo)
        recruitmentPageElement.deleteObjectOnPage()
    })
})




