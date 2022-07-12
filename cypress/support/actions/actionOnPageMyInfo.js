import Actions from "./actions";


const action = new Actions()


class ActionOnPageMyInfo {


    fillFirstAddressStreetField(streetOne) {
        cy.get('[name="contact[street1]"]').clear().type(streetOne)
            .should('have.value', streetOne)
    }

    fillSecondAddressStreetField(streetTwo) {
        cy.get('[name="contact[street2]"]').clear().type(streetTwo)
            .should('have.value', streetTwo)
    }

    fillCityField(city) {
        cy.get('[name="contact[city]"]').clear().type(city)
            .should('have.value', city)
    }

    fillStateOrProvinceField(stateProvince) {
        cy.get('[name="contact[province]"]').clear().type(stateProvince)
            .should('have.value', stateProvince)
    }

    fillZipOrPostalCodeField(postalCode) {
        cy.get('[name="contact[emp_zipcode]"]').clear().type(postalCode)
            .should('have.value', postalCode)
    }

    fillCountryField(country) {
        cy.get('[name="contact[country]"]').select(country)
            .should('contain.text', country)
    }

    fillHomeTelephoneField(homeTelephone) {
        cy.get('[name="contact[emp_hm_telephone]"]').clear().type(homeTelephone)
            .should('have.value', homeTelephone)
    }

    fillMobileField(mobile) {
        cy.get('[name="contact[emp_mobile]"]').clear().type(mobile)
            .should('have.value', mobile)
    }

    fillWorkTelephoneField(workTelephone) {
        cy.get('[name="contact[emp_work_telephone]"]').clear().type(workTelephone)
            .should('have.value', workTelephone)
    }

    fillWorkEmailField(workEmail) {
        cy.get('[name="contact[emp_work_email]"]').clear().type(workEmail)
            .should('have.value', workEmail)
    }

    fillOtherEmailField(otherEmail) {
        cy.get('[name="contact[emp_oth_email]"]').clear().type(otherEmail)
            .should('have.value', otherEmail)
    }


    fillContactDetailsFields(contactDetails) {
        action.clickOnButtonEdit()
        this.fillFirstAddressStreetField(contactDetails.addressStreetOne)
        this.fillSecondAddressStreetField(contactDetails.addressStreetTwo)
        this.fillCityField(contactDetails.city)
        this.fillStateOrProvinceField(contactDetails.stateOrProvince)
        this.fillZipOrPostalCodeField(contactDetails.zipOrPostalCode)
        this.fillCountryField(contactDetails.country)
        this.fillHomeTelephoneField(contactDetails.homeTelephone)
        this.fillMobileField(contactDetails.mobile)
        this.fillWorkTelephoneField(contactDetails.workTelephone)
        this.fillWorkEmailField(contactDetails.workEmail)
        this.fillOtherEmailField(contactDetails.otherEmail)
        action.clickOnButtonSave()
    }
}

export default ActionOnPageMyInfo