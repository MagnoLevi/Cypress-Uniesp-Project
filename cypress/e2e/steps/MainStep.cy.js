import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import mainPage from "../../pages/MainPage.cy";

Given("User navigates to the Website", () => {
    mainPage.enterURL();
});

When("User types in search bar", (datatable) => {
    datatable.hashes().forEach((element) => {
        mainPage.enterSearchBarText(element.text);
    });
});

And("User clicks on search button", () => {
    mainPage.clickSearchButton();
});

Then("User search results are displayed", () => {
    mainPage.clickSearchResults();
});

And("User accepts cookies", () => {
    mainPage.acceptCookies();
});

Then("User scrolls the page down", () => {
    mainPage.scrollPageGradually();
});

// And("User clicks on the consult CPF button", () => {
//     mainPage.ClickConsultCpfButton();
// });
