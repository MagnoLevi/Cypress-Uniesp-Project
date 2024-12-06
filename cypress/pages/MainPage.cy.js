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

    clickDarkModeButton() {
        cy.get('.link-contraste').click();
    }

    clickCarouselButton() {
        cy.get('.swiper-button-next').click();
    }

    clickCarouselLastButton() {
        cy.get('.btn-toggle-novos-perfis').first().click();
    }

    clickProfilesButton() {
        cy.get('.outstanding-link').first().click();
    }

    clickSignLanguageButton() {
        cy.get('.access-button').first().click();
    }

    clickSkipSignLanguageIntroButton() {
        cy.get('.vpw-skip-welcome-message').first().click();
    }
}

const mainPage = new MainPage();
export default mainPage;