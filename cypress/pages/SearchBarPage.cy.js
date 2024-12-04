class SearchBarPage {
    enterURL() {
        cy.visit(
            "https://www.gov.br/pt-br"
            // "https://ecommerce-playground.lambdatest.io/index.php?route=account/login"
        );
    }

    acceptCookies(){
        cy.get('.btn-accept').click({ force: true });
    }

    enterSearchBarText(text) {
        cy.get('#searchtext-input').type(text, { force: true });
    }

    clickSearchButton() {
        cy.get('.aa-SubmitButton').click({ force: true });
    }

    clickSearchResults() {
        cy.get('ul.searchResults a').first().invoke('removeAttr', 'target').click();
    }

    ClickConsultCpfButton() {
        cy.get('.btn-solicitar').first().click();
    }
}

const searchBarPage = new SearchBarPage();
export default searchBarPage;