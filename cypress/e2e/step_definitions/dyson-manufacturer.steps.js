import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import NBSHomepage from '../../support/page-objects/nbs-homepage';
import DysonHomepage from '../../support/page-objects/dyson-homepage';

Given('I am on the NBS Source homepage', () => {
  cy.visit('https://source.thenbs.com');
});

Given('I accept cookies if prompted', () => {
  NBSHomepage.acceptCookies();
});

Given('I search for {string}', (term) => {
  NBSHomepage.searchFor(term);
});

Given('I select the Dyson result from the search results', () => {
  NBSHomepage.selectDysonResult();
});

Given('I skip the survey if present', () => {
  DysonHomepage.checkAndSkipSurvey();
});

Then('the manufacturer homepage URL should contain the expected text', () => {
  DysonHomepage.verifyDysonPageUrl();
});

Then('the contact number should be displayed and link to the correct tel protocol', () => {
  DysonHomepage.verifyContactNumber();
});

Then('the h1 title should be as expected', () => {
  DysonHomepage.verifyDysonPageTitle();
});

Then('the source logo link should have the correct href', () => {
  DysonHomepage.verifySourceLogoLink();
});

Then('the "Architects & Designers" link should have the correct href', () => {
  DysonHomepage.verifyArchitectsDesignersHrefLink();
});

Then('the Dyson homepage should pass accessibility checks', () => {
  DysonHomepage.verifyAccessibility();
});

Then('the location in the API response and UI should be correct', () => {
  DysonHomepage.verifyApiResponse();
});

Then('the Dyson navigation bar should have the correct tabs and links', () => {
  DysonHomepage.verifyDysonNavigationBar();
});

Then('the image snapshot functionality should work', () => {
  NBSHomepage.VerifyNbsVisualRegression();
});

When('I scroll to the bottom of the homepage', () => {
  DysonHomepage.scrollToBottomOfPage();
});

When('I click the back button', () => {
  DysonHomepage.verifyBackButton();
});

Then('the page should be scrolled back to the top', () => {
  cy.window().its('scrollY').should('eq', 0);
});