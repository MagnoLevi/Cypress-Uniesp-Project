class LoginPage {
    enterURL() {
        cy.visit(
            "https://sso.acesso.gov.br/login"
        );
    }

    enterCpfText(text) {
        cy.get('#accountId').type(text, { force: true });
    }

    clickCheckCpfButton  () {
        cy.get('#enter-account-id').click({ force: true });
    }
}

const loginPage = new LoginPage();
export default loginPage;