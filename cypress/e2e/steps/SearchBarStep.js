import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import searchBarPage from "../../pages/SearchBarPage";
import generalPage from "../../pages/GeneralPage.cy";

Given("User navigates to the Main Page to test Search Bar", () => {
    searchBarPage.enterURL();
});

When("User types in search bar", (datatable) => {
    generalPage.acceptCookies();

    cy.wait(1000);
    datatable.hashes().forEach((element) => {
        searchBarPage.enterSearchBarText(element.text);
    });
});

And("User clicks on search button", () => {
    cy.wait(1000);
    searchBarPage.clickSearchButton();
});

Then("User search results are displayed", () => {
    cy.wait(1500);
    generalPage.scrollPageGradually(200);

    cy.wait(1500);
    searchBarPage.clickSearchResults();
});

And("User scrolls the page down", () => {
    cy.wait(1000);
    generalPage.scrollPageGradually();
});
