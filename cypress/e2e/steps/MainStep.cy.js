import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import mainPage from "../../pages/MainPage.cy";
import generalPage from "../../pages/GeneralPage.cy";

Given("User navigates to the Main Page", () => {
    mainPage.enterURL();
});

When("User types in search bar", (datatable) => {
    generalPage.acceptCookies();

    cy.wait(1000);
    datatable.hashes().forEach((element) => {
        mainPage.enterSearchBarText(element.text);
    });
});

And("User clicks on search button", () => {
    cy.wait(1000);
    mainPage.clickSearchButton();
});

Then("User search results are displayed", () => {
    cy.wait(1500);
    generalPage.scrollPageGradually(200);

    cy.wait(1500);
    mainPage.clickSearchResults();
});

And("User scrolls the page down", () => {
    cy.wait(1000);
    generalPage.scrollPageGradually();
});
