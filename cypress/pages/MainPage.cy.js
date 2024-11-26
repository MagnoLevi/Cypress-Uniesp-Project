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

    scrollPageGradually() {
        cy.document().then((doc) => {
            const scrollHeight = doc.body.scrollHeight; // Altura total da página
            const step = 50; // Pixels por "passo"
            const delay = 50; // Tempo entre cada passo (em ms)
    
            for (let y = 0; y <= scrollHeight; y += step) {
                cy.wait(delay); // Aguarda um pouco entre os scrolls
                cy.scrollTo(0, y); // Move para a próxima posição
            }
        });
    }
}

const mainPage = new MainPage();
export default mainPage;