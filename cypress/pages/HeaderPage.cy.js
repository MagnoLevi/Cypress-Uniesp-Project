class HeaderPage {
    clickSideMenuIcon() {
        cy.get('.ico-navegacao').first().click();
    }

    hoverSideMenuList() {
        const arrayHover = [1, 3, 4, 5, 6, 7];
        for (let i = 0; i < arrayHover.length; i++) {
            cy.get('ul.list-navigation .dropdown-submenu')
                .eq(arrayHover[i])
                .trigger('mouseover', { force: true })
                .wait(1000)
                .trigger('mouseout', { force: true });
        }
    }

    clickSideMenuItem() {
        cy.get('ul.list-navigation .dropdown-submenu')
            .eq(3)
            .trigger('mouseover', { force: true });

        cy.wait(500);

        cy.get('a[href="https://www.gov.br/pt-br/temas/transparencia-fiscal-orcamento-nacional"]').first().click({ force: true });
    }
}

const headerPage = new HeaderPage();
export default headerPage;