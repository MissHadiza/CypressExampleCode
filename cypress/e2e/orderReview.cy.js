/// <reference types="cypress" />
import storefront from '../pageObjects/storefront';

const storeFront = new storefront();
const data = require('../fixtures/data.json')

const staffUsername = data.login.staffUsername
const staffPasscode = data.login.staffPasscode

describe('From Store Creation to Order Review flow', () => {
    beforeEach('open Url', () => {
        cy.openUrl()
    })

    it('should validate that CS user can review an order', () => {
        cy.login(staffUsername, staffPasscode)

    })

    it('should validate that CS user can create store, place an order and review an order', () => {
        cy.login(staffUsername, staffPasscode)
        storeFront.userMenu.should('be.visible')
        storeFront.cart.should('be.visible')
        storeFront.newStore.click()
        storeFront.initialphoneNumber.type('08186543333')
        storeFront.proceedBtn.click()
        storeFront.agentCode.type('FA-BMMF1S')
        storeFront.channel.select(1)
        storeFront.segment.select(0)
        storeFront.firstName.type('David')
        storeFront.lastName.type('Adesanya')
        storeFront.newphoneNumber.type('08186543333')
        storeFront.secondphoneNumber.type('')
        storeFront.companyName.type('David & sons')
        storeFront.companyStreet.type('providence estate')
        storeFront.country.select('Nigeria')
        storeFront.state.select('Lagos')
        storeFront.city.select('MAGODO')
        storeFront.proceedBtn.click()
    })

})