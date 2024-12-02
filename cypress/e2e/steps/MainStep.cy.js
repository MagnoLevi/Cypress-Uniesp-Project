import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import mainPage from "../../pages/MainPage.cy";

Given("User navigates to the Website", () => {
    mainPage.enterURL();
});

When("User types in search bar", (datatable) => {
    mainPage.acceptCookies();

    cy.wait(1000);
    datatable.hashes().forEach((element) => {
        mainPage.enterSearchBarText(element.text);
    });
});

And("User clicks on search button", () => {
    mainPage.acceptCookies();

    cy.wait(1000);
    mainPage.clickSearchButton();
});

Then("User search results are displayed", () => {
    mainPage.acceptCookies();

    cy.wait(1500);
    mainPage.scrollPageGradually(200);

    cy.wait(1500);
    mainPage.clickSearchResults();
});

And("User scrolls the page down", () => {
    mainPage.acceptCookies();

    cy.wait(1000);
    mainPage.scrollPageGradually();
});
