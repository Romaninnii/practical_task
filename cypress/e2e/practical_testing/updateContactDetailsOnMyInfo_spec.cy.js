import LoginPage from "../../support/login/loginPage";
import Navigation from "../../support/navigation/navigation";
import ActionOnPageMyInfo from "../../support/actions/actionOnPageMyInfo";
import navBar from "../../fixtures/navigation/navBar.json"
import userLogin from "../../fixtures/loginUsers/yablonskyi.json"
import navMenu from "../../fixtures/navigation/navMenu.json"
import dataBase from "../../fixtures/dataBase/dataBase.json";

const loginPage = new LoginPage()
const navigation = new Navigation()
const myInfoPageElement = new ActionOnPageMyInfo()


describe('It  update all "Contact Details" information', () => {
    it('Visits main page, select item "My Info", then item "Contact Details" and update all information.', ()=> {
        loginPage.visitAndLoginIntoPage(userLogin)
        navigation.navigationMenu(navBar.myInfo)
        navigation.navigationInsideParagraphMenu(navMenu.myInfo.contactDetails)
        myInfoPageElement.fillContactDetailsFields(dataBase.contactDetailsInfo)
    })
})

