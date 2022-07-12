import LoginPage from "../../support/login/loginPage";
import Navigation from "../../support/navigation/navigation";
import ActionOnPageRecruitment from "../../support/actions/actionOnPageRecruitment";
import dataBase from "../../fixtures/dataBase/dataBase.json";
import navBar from "../../fixtures/navigation/navBar.json"
import userLogin from "../../fixtures/loginUsers/yablonskyi.json"
import navMenu from "../../fixtures/navigation/navMenu.json"


const recruitmentPageElement = new ActionOnPageRecruitment()
const loginPage = new LoginPage()
const navigation = new Navigation()



describe('It add, update and delete "Vacancy" review ', () => {
    it('Visit main page, select item "Recruitment" then item "Vacancy" and firstly add "Vacancy" then update it and after that delete.', ()=> {
        loginPage.visitAndLoginIntoPage(userLogin)
        navigation.navigationMenu(navBar.recruitment)
        navigation.navigationInsideParagraphMenu(navMenu.recruitment.vacancies)
        recruitmentPageElement.addAndFillVacancyReviewFields(dataBase.vacancyInfo)
        recruitmentPageElement.searchVacancyOnPage(dataBase.vacancyInfo.jobTitle, dataBase.vacancyInfo.vacancyName, dataBase.vacancyInfo.hiringManager)
        recruitmentPageElement.selectFirstObjectOnPage(dataBase.vacancyInfo.vacancyName)
        recruitmentPageElement.updateVacancyReviewFields(dataBase.updateVacancyInfo)
        recruitmentPageElement.searchVacancyOnPage(dataBase.updateVacancyInfo.jobTitle, dataBase.updateVacancyInfo.vacancyName, dataBase.updateVacancyInfo.hiringManager)
        recruitmentPageElement.deleteObjectOnPage()
    })
})


