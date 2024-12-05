import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import loginPage from "../../pages/LoginPage.cy";

Given("User navigates to the login page", () => {
    loginPage.enterURL();
});

When("User types cpf input", (datatable) => {
    cy.wait(1000);
    datatable.hashes().forEach((element) => {
        loginPage.enterCpfText(element.cpf);
    });
});

And("User clicks on check cpf button", () => {
    cy.wait(1000);
    loginPage.clickCheckCpfButton();
});
