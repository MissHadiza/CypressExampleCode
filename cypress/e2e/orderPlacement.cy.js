/// <reference types="cypress" />
import storefront from '../pageObjects/storefront';

const storeFront = new storefront();
const data = require('../fixtures/data.json')

const staffUsername = data.login.staffUsername
const staffPasscode = data.login.staffPasscode

describe('Order placement Module', () => {
    beforeEach('open Url', () => {
        cy.openUrl()
    })

    it('should validate that CS user can fully place an order', () => {
        cy.login(staffUsername, staffPasscode)
        storeFront.search.type('Adesola')
        storeFront.searchBtn.click()
        cy.get(':nth-child(1) > .sc-fznzOf').click()
        storeFront.paymentMethod.click()
        storeFront.cashOption.click()
        storeFront.paymentConfirmation.click()
        storeFront.testSKU.dblclick()
        storeFront.cart.click()
        storeFront.placeorderBtn.click()
        storeFront.orderStatus.should('be.visible').and('have.text', 'Fully Placed')
    })
    //it('should validate partially placed scenario', () => {
    //     cy.login(staffUsername, staffPasscode)
    //     storeFront.search.type('Adesola')
    //     storeFront.searchBtn.click()
    //     cy.get(':nth-child(1) > .sc-fznzOf').click()
    //     storeFront.paymentMethod.click()
    //     storeFront.cashOption.click()
    //     storeFront.paymentConfirmation.click()
    //     storeFront.testSKU.dblclick()
    //     storeFront.cart.click()
    //     storeFront.placeorderBtn.click()
    //     storeFront.orderStatus.should('be.visible').and('have.text', 'Partially Placed')
    // })
    // it('should validate error in placement scenario', () => {
    //     cy.login(staffUsername, staffPasscode)
    //     storeFront.search.type('Adesola')
    //     storeFront.searchBtn.click()
    //     cy.get(':nth-child(1) > .sc-fznzOf').click()
    //     storeFront.paymentMethod.click()
    //     storeFront.cashOption.click()
    //     storeFront.paymentConfirmation.click()
    //     storeFront.testSKU.dblclick()
    //     storeFront.cart.click()
    //     storeFront.placeorderBtn.click()
    //     storeFront.orderStatus.should('be.visible').and('have.text', 'Error in Placement')
    // })
})