class GeneralPage {
    acceptCookies() {
        cy.get('.btn-accept').click({ force: true });
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

const generalPage = new GeneralPage();
export default generalPage;