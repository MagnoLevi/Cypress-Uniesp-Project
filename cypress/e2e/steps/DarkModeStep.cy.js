import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import mainPage from "../../pages/MainPage.cy";
import generalPage from "../../pages/GeneralPage.cy";

Given("User navigates to the main page to test dark mode button", () => {
    mainPage.enterURL();
});

When("User clicks on dark mode button", () => {
    generalPage.acceptCookies();

    cy.wait(1000);
    mainPage.clickDarkModeButton();
});

And("User scrolls dark mode page down", () => {
    cy.wait(1000);
    generalPage.scrollPageGradually();
});
