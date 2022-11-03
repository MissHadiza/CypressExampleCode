import loginPage from "../pageObjects/loginPage";

const LoginPage = new loginPage();

Cypress.Commands.add('openUrl', ()=>{
    cy.visit(Cypress.env('storefronttestUrl'))
})
Cypress.Commands.add('login', (username, passcode)=>{
    LoginPage.username.clear().type(username)
    LoginPage.passcode.clear().type(passcode)
    LoginPage.loginbtn.click()
})
