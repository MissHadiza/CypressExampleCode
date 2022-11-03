/// <reference types="cypress" />
import loginPage from "../pageObjects/loginPage";

const LoginPage = new loginPage()

const data = require('../fixtures/data.json')
const newuserUsername = data.login.newuserUsername
const newuserPasscode = data.login.newuserPasscode

describe('Login (New and Existing)Module', () => {
    beforeEach('open Url', () => {
        cy.openUrl()
    })

    it('should validate that New Customer is prompted to change password and is unable to login with old credentials', () => {
        //need to call reset password api endpoint here if its an existing user
        cy.login(newuserUsername, newuserPasscode)
        LoginPage.oldPassword.type('BMMF1S')
        LoginPage.newPassword.type('12349')
        LoginPage.confirmPassword.type('12349')
        LoginPage.resetPassword.click()
        cy.wait(1000)
        LoginPage.username.type('FA-BMMF1S')
        LoginPage.passcode.type('BMMF1S')
        LoginPage.loginbtn.click()
        cy.get('.small').should('be.visible').and('have.text', 'Wrong Credentials!')
    })
    
    it('should validate that New Customer is unable to change password without confirming password', () => {
        cy.pause() //need to call reset password api endpoint here
        cy.login(newuserUsername, newuserPasscode)
        LoginPage.oldPassword.type('BMMF1S')
        LoginPage.newPassword.type('12348')
        LoginPage.resetPassword.click()
        LoginPage.requirederror.should('be.visible').and('have.text', '* Required')
        LoginPage.confirmPassword.type('12345')
        LoginPage.requirederror.should('be.visible').and('have.text', '* passwords must match')
    })
    it('should validate that New Customer is unable to change password using same password', () => {
        cy.login(newuserUsername, newuserPasscode)
        LoginPage.oldPassword.type('BMMF1S')
        LoginPage.newPassword.type('BMMF1S')
        LoginPage.confirmPassword.type('BMMF1S')
        LoginPage.resetPassword.click()
        cy.get('.small').should('be.visible') //awaiting correct error message
    })
    it('should validate that New Customer is unable to change password using incorrect old password', () => {
        cy.login(newuserUsername, newuserPasscode)
        LoginPage.oldPassword.type('BMMF1qwS')
        LoginPage.newPassword.type('BMMF111')
        LoginPage.confirmPassword.type('BMMF111')
        LoginPage.resetPassword.click()
        cy.get('.small').should('be.visible') //awaiting correct error message
    })

})