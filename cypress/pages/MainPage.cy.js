class MainPage {
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

    scrollPageGradually(scrollHeightParam = null) {
        cy.document().then((doc) => {
            const scrollHeight = scrollHeightParam ? scrollHeightParam : doc.body.scrollHeight;
            const step = 50;
            const delay = 50;
    
            for (let y = 0; y <= scrollHeight; y += step) {
                cy.wait(delay);
                cy.scrollTo(0, y);
            }
        });
    }
}

const mainPage = new MainPage();
export default mainPage;