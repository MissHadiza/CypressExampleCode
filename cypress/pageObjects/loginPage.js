class loginPage {
    get logo() {
        return cy.get('img')
    }
    get countryModal() {
        return cy.get(':nth-child(1) > .slide___3-Nqo > .slideInner___2mfX9')
    }
    get SelectcountryText() {
        return cy.get(':nth-child(1) > .slide___3-Nqo > .slideInner___2mfX9 > .css-xi606m')
    }
    get SelectcountrytextFrench() {
        return cy.get(':nth-child(2) > .slide___3-Nqo > .slideInner___2mfX9 > .css-xi606m')
    }
    get NextcountryBtn() {
        return cy.get('.buttonNext___2mOCa > svg')
    }
    get PreviouscountryBtn() {
        return cy.get('.buttonBack___1mlaL')
    }
    get countryNig() {
        return cy.get(':nth-child(1) > .slide___3-Nqo > .slideInner___2mfX9 > [href="https://test.storefront.simplemarket.app/"] > .css-9vtqfg > .chakra-text')
    }
    get countrySen() {
        return cy.get(':nth-child(3) > .slide___3-Nqo > .slideInner___2mfX9 > [href="https://test.storefront.simplemarket.app/"] > .css-9vtqfg > .chakra-text')
    }
    get countryCiv() {
        return cy.get(':nth-child(2) > .slide___3-Nqo > .slideInner___2mfX9 > [href="https://test.storefront.simplemarket.app/"] > .css-9vtqfg > .chakra-text')
    }
    get countryChg() {
        return cy.get('.sc-AxgMl')
    }
    get username() {
        return cy.get('.sc-AxmLO')
    }
    get passcode() {
        return cy.get('.sc-AxheI')
    }
    get loginbtn() {
        return cy.get('.sc-Axmtr')
    }
    get errormssg() {
        return cy.get(':nth-child(1) > .error_wrapper > .sc-fzoLsD')
    }
    get Errormssg() {
        return cy.get(':nth-child(2) > .error_wrapper > .sc-fzoLsD')
    }
    get error() {
        return cy.get('.small')
    }
    get requirederror() {
        return cy.get('.sc-fznZeY')
    }
    get oldPassword() {
        return cy.get(':nth-child(1) > .sc-AxheI > input')
    }
    get newPassword() {
        return cy.get(':nth-child(2) > .sc-AxheI > input')
    }
    get confirmPassword() {
        return cy.get(':nth-child(3) > .sc-AxheI > input')
    }
    get resetPassword() {
        return cy.get('.sc-104e07x-0')
    }

}
export default loginPage;
