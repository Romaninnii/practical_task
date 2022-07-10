import dataBase from "../dataBase/dataBase.json";
import Actions from "./actions";


const action = new Actions()


class ActionOnPageMyInfo {
    getAndSelectContactDetails() {
        cy.contains('Contact Details').click()
    }

    getAndFillAddressStreetOne(streetOne) {
        cy.get('[name="contact[street1]"]').clear().type(streetOne)
    }

    getAndFillAddressStreetTwo(streetTwo) {
        cy.get('[name="contact[street2]"]').clear().type(streetTwo)
    }

    getAndFillCity(city) {
        cy.get('[name="contact[city]"]').clear().type(city)
    }

    getAndFillStateOrProvince(stateProvince) {
        cy.get('[name="contact[province]"]').clear().type(stateProvince)
    }

    getAndFillZipOrPostalCode(postalCode) {
        cy.get('[name="contact[emp_zipcode]"]').clear().type(postalCode)
    }

    getAndFillCountry(country) {
        cy.get('[name="contact[country]"]').select(country)
    }

    getAndFillHomeTelephone(homeTelephone) {
        cy.get('[name="contact[emp_hm_telephone]"]').clear().type(homeTelephone)
    }

    getAndFillMobile(mobile) {
        cy.get('[name="contact[emp_mobile]"]').clear().type(mobile)
    }

    getAndFillWorkTelephone(workTelephone) {
        cy.get('[name="contact[emp_work_telephone]"]').clear().type(workTelephone)
    }

    getAndFillWorkEmail(workEmail) {
        cy.get('[name="contact[emp_work_email]"]').clear().type(workEmail)
    }

    getAndFillOtherEmail(otherEmail) {
        cy.get('[name="contact[emp_oth_email]"]').clear().type(otherEmail)
    }


    fillContactDetails() {
        action.clickOnButtonEdit()
        this.getAndFillAddressStreetOne(dataBase.contactDetailsInfo.AddressStreetOne)
        this.getAndFillAddressStreetTwo(dataBase.contactDetailsInfo.AddressStreetTwo)
        this.getAndFillCity(dataBase.contactDetailsInfo.City)
        this.getAndFillStateOrProvince(dataBase.contactDetailsInfo.StateOrProvince)
        this.getAndFillZipOrPostalCode(dataBase.contactDetailsInfo.ZipOrPostalCode)
        this.getAndFillCountry(dataBase.contactDetailsInfo.Country)
        this.getAndFillHomeTelephone(dataBase.contactDetailsInfo.HomeTelephone)
        this.getAndFillMobile(dataBase.contactDetailsInfo.Mobile)
        this.getAndFillWorkTelephone(dataBase.contactDetailsInfo.WorkTelephone)
        this.getAndFillWorkEmail(dataBase.contactDetailsInfo.WorkEmail)
        this.getAndFillOtherEmail(dataBase.contactDetailsInfo.OtherEmail)
        action.clickOnButtonSave()
    }
}

export default ActionOnPageMyInfo