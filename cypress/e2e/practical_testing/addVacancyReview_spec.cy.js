import LoginPage from "../../pageObject/loginPage";
import Navigation from "../../pageObject/navigation/navigation";
import ActionOnPageRecruitment from "../../pageObject/pageElement/actionOnPageRecruitment";
import dataBase from "../../pageObject/dataBase/dataBase.json";
import navBar from  "../../pageObject/dataBase/navBar.json"

const recruitmentPageElement = new ActionOnPageRecruitment()
const loginPage = new LoginPage()
const navigation = new Navigation()



describe('It add, update and delete "Vacancy" review ', () => {
    it('Visit main page, select item "Recruitment" then item "Vacancy" and firstly add "Vacancy" then update it and after that delete.', ()=> {
        loginPage.visitAndLoginIntoPage()
        navigation.navigationMenu(navBar.Recruitment)
        recruitmentPageElement.getAndSelectVacancyPage()
        recruitmentPageElement.addAndFillVacancyReviewFields()
        recruitmentPageElement.searchVacancyOnPage(dataBase.VacancyInfo.jobTitle, dataBase.VacancyInfo.vacancyName, dataBase.VacancyInfo.hiringManager)
        recruitmentPageElement.selectObjectOnPage(dataBase.VacancyInfo.vacancyName)
        recruitmentPageElement.updateVacancyReviewFields()
        recruitmentPageElement.searchVacancyOnPage(dataBase.UpdateVacancyInfo.jobTitle, dataBase.UpdateVacancyInfo.vacancyName, dataBase.UpdateVacancyInfo.hiringManager)
        recruitmentPageElement.deleteObjectOnPage()
    })
})


