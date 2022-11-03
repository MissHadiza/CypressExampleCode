class storefront {
    get userMenu() {
        return cy.get('.grmuvg-1')
    }
    get cart() {
        return cy.get('.sc-1dpz0w9-1')
    }
    get logoutBtn() {
        return cy.get('[href="/auth/signin"]')
    }
    get newStore() {
        return cy.get('.sc-fzoMdx')
    }
    get initialphoneNumber() {
        return cy.get('.sc-fzpisO')
    }
    get proceedBtn() {
        return cy.get('.sc-fzoVTD')
    }
    get error() {
        return cy.get('.sc-fznXWL')
    }
    get FAagentcode() {
        return cy.get(':nth-child(1) > .sc-fznAgC > .sc-fzoydu')
    }
    get agentCode() {
        return cy.get(':nth-child(1) > .sc-fzpkqZ > .sc-fzqMAW')
    }
    get channel() {
        return cy.get(':nth-child(2) > .sc-fznAgC > .sc-fzoJMP')
    }
    get callOutbound() {
        return cy.get('.css-qc6sy-singleValue')
    }
    get storeOption() {
        return cy.get(':nth-child(3) > .sc-fznAgC > .sc-fzoJMP > .css-1s2u09g-control > .css-1d8n9bt > .css-qc6sy-singleValue')
    }
    get segment() {
        return cy.get(':nth-child(3) > .sc-fznAgC > .sc-fzoJMP')
    }
    get firstName() {
        return cy.get(':nth-child(4) > .sc-fzpkqZ > .sc-fzqMAW')
    }
    get lastName() {
        return cy.get(':nth-child(5) > .sc-fzpkqZ > .sc-fzqMAW')
    }
    get newphoneNumber() {
        return cy.get(':nth-child(6) > .sc-fzpkqZ > .sc-fzqMAW')
    }
    get secondphoneNumber() {
        return cy.get(':nth-child(7) > .sc-fzpkqZ > .sc-fzqMAW')
    }
    get companyName() {
        return cy.get(':nth-child(8) > .sc-fzpkqZ > .sc-fzqMAW')
    }
    get companyStreet() {
        return cy.get('.sc-fzoJMP')
    }
    get country() {
        return cy.get(':nth-child(10) > .sc-fzpkqZ > .sc-fzoydu')
    }
    get state() {
        return cy.get(':nth-child(11) > .sc-fzpkqZ > .sc-fzoydu')
    }
    get city() {
        return cy.get(':nth-child(12) > .sc-fzpkqZ > .sc-fzoydu')
    }
    get createstoreBtn() {
        return cy.get('.sc-fzqMAW')
    }
    get cancelBtn() {
        return cy.get('.sc-fzokvW')
    }
    get search() {
        return cy.get('.sc-fznMAR > .sc-fznxKY > .sc-fzpmMD')
    }
    get searchBtn() {
        return cy.get('.sc-fznMAR > .sc-fznxKY > button')
    }
    get storesPage() {
        return cy.get('.sc-fzqzlV')
    }
    get testSKU() {
        return cy.get(':nth-child(16) > .sc-fznNTe > .sc-fzobTh > .sc-fzonZV > :nth-child(2)')
    }
    get paymentMethod() {
        return cy.get('.header-payment')
    }
    get cashOption() {
        return cy.get('.sc-oTbqq > :nth-child(1)')
    }
    get transferOption() {
        return cy.get('.sc-oTbqq > :nth-child(2)')
    }
    get paymentConfirmation() {
        return cy.get('.sc-pANHa')
    }
    get checkOut() {
        return cy.get('.header-summary')
    }
    get placeorderBtn() {
        return cy.get(':nth-child(8) > :nth-child(1) > .modal > .modal-dialog > .modal-content > .sc-fzpjYC > :nth-child(4) > div > .sc-fznJRM')
    }
    get orderStatus() {
        return cy.get(':nth-child(8) > :nth-child(1) > .modal > .modal-dialog > .modal-content > .sc-fzoyAV > :nth-child(4) > .sc-fzoLag > tbody > tr > :nth-child(3)')
    }
    get backtoStores() {
        return cy.get(':nth-child(8) > :nth-child(1) > .modal > .modal-dialog > .modal-content > .sc-fzoyAV > .sc-fzqNJr > [style="font-size: 9px; border: none; color: white; background-color: rgb(9, 23, 71);"]')
    }
    get viewDasboard() {
        return cy.get(':nth-child(8) > :nth-child(1) > .modal > .modal-dialog > .modal-content > .sc-fzoyAV > .sc-fzqNJr > [style="font-size: 9px; border: none; color: white; background-color: rgb(250, 138, 68);"]')
    }
}
export default storefront