class MainPage {
    enterURL() {
        cy.visit(
            "https://www.gov.br/pt-br"
        );
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
}

const mainPage = new MainPage();
export default mainPage;