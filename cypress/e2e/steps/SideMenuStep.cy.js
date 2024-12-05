import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import mainPage from "../../pages/MainPage.cy";
import headerPage from "../../pages/HeaderPage.cy";
import generalPage from "../../pages/GeneralPage.cy";

Given("User navigates to the main page to test side menu", () => {
    mainPage.enterURL();
});

When("User clicks on side menu icon", (datatable) => {
    generalPage.acceptCookies();

    cy.wait(1000);
    headerPage.clickSideMenuIcon();
});

And("User hovers over side menu list", () => {
    cy.wait(1000);
    headerPage.hoverSideMenuList();
});

Then("User clicks on the first item on the side menu", () => {
    cy.wait(1000);
    headerPage.clickSideMenuItem();
});
