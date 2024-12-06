import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import mainPage from "../../pages/MainPage.cy";
import generalPage from "../../pages/GeneralPage.cy";

Given("User navigates to the main page to use sign language button", () => {
    mainPage.enterURL();
});

When("User clicks on sign language button", () => {
    generalPage.acceptCookies();

    cy.wait(1000);
    mainPage.clickSignLanguageButton();
});

And("User clicks to skip intro", () => {
    cy.wait(13000);
    mainPage.clickSkipSignLanguageIntroButton();
});
