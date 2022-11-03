/// <reference types="cypress" />
import loginPage from "../pageObjects/loginPage";
import storefront from "../pageObjects/storefront";

const LoginPage = new loginPage();
const storeFront = new storefront();

const data = require('../fixtures/data.json')

const invalidUsername = data.login.invalidUsername
const invalidPasscode = data.login.invalidPasscode
const staffUsername = data.login.staffUsername
const staffPasscode = data.login.staffPasscode
const fieldagentUsername = data.login.fieldagentUsername
const fieldagentPasscode = data.login.fieldagentPasscode
const customerUsername = data.login.customerUsername
const customerPasscode = data.login.customerPasscode


describe('Login (New and Existing)Module', () => {
    beforeEach('open Url', () => {
        cy.openUrl()
    })

    it('should validate that login page is visible', () => {
        LoginPage.logo.should('be.visible')
        LoginPage.username.should('be.visible')
        LoginPage.passcode.should('be.visible')
        LoginPage.loginbtn.should('be.visible')
    })
    it('should validate that user cannot login with empty username and password', () => {
        LoginPage.loginbtn.click()
        LoginPage.errormssg.should('be.visible').and('contain.text', 'Required')
        LoginPage.Errormssg.should('be.visible').and('contain.text', 'Required')

    })
    it('should validate that user cannot login with valid username and invalid password', () => {
        cy.login(staffUsername, invalidPasscode)
        LoginPage.error.should('be.visible')
    })
    it('should validate that user cannot login with invalid username and valid password', () => {
        cy.login(invalidUsername, staffPasscode)
        LoginPage.error.should('be.visible')
        LoginPage.error.should('contain.text', 'Wrong Credentials')

    })
    it('should validate that user cannot login with invalid details', () => {
        cy.login(invalidUsername, invalidPasscode)
        LoginPage.error.should('be.visible')
        LoginPage.error.should('contain.text', 'Wrong Credentials')
    })
    it('should validate that CS user can login with valid username and password', () => {
        cy.login(staffUsername, staffPasscode)
        storeFront.userMenu.should('be.visible')
    })
    it('should validate that FA user can login with valid username and password', () => {
        cy.login(fieldagentUsername, fieldagentPasscode)
        storeFront.userMenu.should('be.visible')
    })
    it('should validate that Customer can login with valid username and password', () => {
        cy.login(customerUsername, customerPasscode)
        storeFront.userMenu.should('be.visible')
    })
    it('should validate that user can logout', () => {
        cy.login(customerUsername, customerPasscode)
        storeFront.userMenu.click()
        storeFront.logoutBtn.click()
        LoginPage.username.should('be.visible')
        LoginPage.passcode.should('be.visible')
        LoginPage.loginbtn.should('be.visible')
    })
})