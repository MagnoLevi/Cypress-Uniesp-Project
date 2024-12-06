import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import mainPage from "../../pages/MainPage.cy";
import generalPage from "../../pages/GeneralPage.cy";

Given("User navigates to the main page to use the carousel", () => {
    mainPage.enterURL();
});

When("User scrolls down to the carousel", () => {
    generalPage.acceptCookies();

    cy.wait(1000);
    generalPage.scrollPageGradually(945);
});

And("User clicks on carousel button", () => {
    for (let i = 0; i < 3; i++) {
        cy.wait(1500);
        mainPage.clickCarouselButton();
    }

    cy.wait(1500);
    mainPage.clickCarouselLastButton();
});

Then("User clicks on all profiles button", () => {
    cy.wait(1000);
    mainPage.clickProfilesButton();
    
    cy.wait(1000);
    generalPage.scrollPageGradually();
});
