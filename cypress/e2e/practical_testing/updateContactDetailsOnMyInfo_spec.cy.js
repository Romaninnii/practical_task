import LoginPage from "../../pageObject/loginPage";
import Navigation from "../../pageObject/navigation/navigation";
import ActionOnPageMyInfo from "../../pageObject/pageElement/actionOnPageMyInfo";
import navBar from  "../../pageObject/dataBase/navBar.json"

const loginPage = new LoginPage()
const navigation = new Navigation()
const myInfoPageElement = new ActionOnPageMyInfo()


describe('It  update all "Contact Details" information', () => {
    it('Visits main page, select item "My Info", then item "Contact Details" and update all information.', ()=> {
        loginPage.visitAndLoginIntoPage()
        navigation.navigationMenu(navBar.MyInfo)
        myInfoPageElement.getAndSelectContactDetails()
        myInfoPageElement.fillContactDetails()
    })
})

