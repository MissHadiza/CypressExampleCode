/// <reference types="cypress" />
import storefront from '../pageObjects/storefront';

const storeFront = new storefront();
const data = require('../fixtures/data.json')

const fieldagentUsername = data.login.fieldagentUsername
const fieldagentPasscode = data.login.fieldagentPasscode
const staffUsername = data.login.staffUsername
const staffPasscode = data.login.staffPasscode

describe('Store Creation Module', () => {
    beforeEach('open Url', () => {
        cy.openUrl()
    })
    it('should validate that FA user cannot create store without filling all required fields', () => {
        cy.login(fieldagentUsername, fieldagentPasscode)
        storeFront.userMenu.should('be.visible')
        storeFront.cart.should('be.visible')
        storeFront.search.should('be.visible')
        storeFront.searchBtn.should('be.visible').and('not.be.disabled')
        storeFront.newStore.should('be.visible')
        storeFront.newStore.click()
        storeFront.initialphoneNumber.type('09084567323')
        storeFront.proceedBtn.click()
        storeFront.createstoreBtn.click()
        storeFront.createstoreBtn.should('be.disabled')
        storeFront.FAagentcode.should('be.disabled')
        storeFront.channel.click()
        storeFront.callOutbound.click()
        storeFront.createstoreBtn.should('be.disabled')
        storeFront.segment.click()
        storeFront.storeOption.click()
        storeFront.createstoreBtn.should('be.disabled')

        // storeFront.firstName.type('David')
        // storeFront.lastName.type('Adesanya')
        // storeFront.newphoneNumber.type('08186543333')
        // storeFront.secondphoneNumber.type('')
        // storeFront.companyName.type('David & sons')
        // storeFront.companyStreet.type('providence estate')
        // storeFront.country.select('Nigeria')
        // storeFront.state.select('Lagos')
        // storeFront.city.select('MAGODO')
        // storeFront.proceedBtn.click()
    })
    // it('should validate that FA user cannot create store without inputing a number', () => {
    //     cy.login(fieldagentUsername, fieldagentPasscode)
    //     storeFront.newStore.click()
    //     storeFront.initialphoneNumber.clear()
    //     storeFront.proceedBtn.click()
    //     storeFront.error.should('be.visible').and('contain.text', 'Required')
    // })
    // it('should validate that FA user cannot create store with an invalid number format', () => {
    //     cy.login(fieldagentUsername, fieldagentPasscode)
    //     storeFront.newStore.click()
    //     storeFront.initialphoneNumber.type('0890094')
    //     storeFront.error.should('be.visible').and('contain.text', 'Invalid Phone Number format')
    //     storeFront.proceedBtn.should('be.disabled')
    //     storeFront.initialphoneNumber.clear()
    //     storeFront.initialphoneNumber.type('abdsfgg')
    //     storeFront.error.should('be.visible').and('contain.text', 'Invalid Phone Number format')
    //     storeFront.proceedBtn.should('be.disabled')
    // })
    // // it('should validate that CS user cannot create store with an already existing phone number', () => {
    // //     cy.login(staffUsername, staffPasscode)
    // //     storeFront.userMenu.should('be.visible')
    // //     storeFront.cart.should('be.visible')
    // //     storeFront.newStore.click()
    // //     storeFront.initialphoneNumber.type('08186540083')
    // //     storeFront.proceedBtn.click()
    // // })
    // it('should validate that CS user cann create store with an already existing phone number', () => {
    //     cy.login(staffUsername, staffPasscode)
    //     storeFront.userMenu.should('be.visible')
    //     storeFront.cart.should('be.visible')
    //     storeFront.newStore.click()
    //     storeFront.initialphoneNumber.type('08186540083')
    //     storeFront.proceedBtn.click()
    // })
})
