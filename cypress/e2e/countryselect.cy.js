/// <reference types="cypress" />
import loginPage from "../pageObjects/loginPage";

const LoginPage = new loginPage();

describe('Country Select and Prospective Customers Module', () => {
    beforeEach('open Url', () => {
        cy.visit(Cypress.env('countryselectUrl'))
    })

    it('should validate that country selection is visible', () => {
        LoginPage.logo.should('be.visible')
        LoginPage.SelectcountryText.should('contain.text', 'SELECT A COUNTRY')
        LoginPage.NextcountryBtn.click()
        LoginPage.SelectcountrytextFrench.should('contain.text', 'CHOISISSEZ UN PAYS')
        LoginPage.countryModal.should('contain.text', 'New Client?', 'New wholesaler?', 'Enquire/Complaints', 'Chat with us')
    })
    it('should validate that user can select Nigeria', () => {
        LoginPage.NextcountryBtn.click()
        LoginPage.PreviouscountryBtn.click()
        LoginPage.countryNig.click()
        LoginPage.username.should('be.visible')
        LoginPage.passcode.should('be.visible')
        LoginPage.loginbtn.should('be.visible')
    })
    it('should validate that user can select Ivory coast', () => {
        LoginPage.NextcountryBtn.click()
        LoginPage.countryCiv.click()
        LoginPage.username.should('be.visible')
        LoginPage.passcode.should('be.visible')
        LoginPage.loginbtn.should('be.visible')
    })
    it('should validate that user can select Senegal', () => {
        LoginPage.NextcountryBtn.click()
        LoginPage.NextcountryBtn.click()
        LoginPage.countrySen.click()
        LoginPage.username.should('be.visible')
        LoginPage.passcode.should('be.visible')
        LoginPage.loginbtn.should('be.visible')
    })
    it('should validate that prospective customers are able to signup', () => {
        LoginPage.countryModal.should('contain.text', 'New Client?', 'New wholesaler?', 'Enquire/Complaints', 'Chat with us')
        cy.get(':nth-child(1) > .slide___3-Nqo > .slideInner___2mfX9 > :nth-child(3)')
            .find('a')
            .should("have.attr", "href", "https://docs.google.com/forms/d/e/1FAIpQLScR-G20XyEbWCQY_-7wZHspH9mdAcKeHNPSjpv-W6ueuToSHw/viewform")
            .should("have.text", "Click here?")
        cy.get(':nth-child(1) > .slide___3-Nqo > .slideInner___2mfX9 > :nth-child(4)')
            .find('a')
            .should("have.attr", "href", "https://forms.gle/FxrxES2eWicbPoWv7")
            .should("have.text", "Click here?")
        cy.get(':nth-child(1) > .slide___3-Nqo > .slideInner___2mfX9 > :nth-child(6)')
            .find('a')
            .should("have.attr", "href", "https://wa.me/2348155546404?text=Hi.+Help_me+Please")
    })
})