import NBSHomepage from '../../support/page-objects/nbs-homepage';
import DysonHomepage from '../../support/page-objects/dyson-homepage';

/**
 * Regression Tests for Dyson Manufacturer Page
 * 
 * This test suite uses the Page Object Model (POM) to interact with the NBS Source website.
 * Each test verifies a specific feature or element on the Dyson manufacturer page.
 */
describe('Regression Tests', () => {

    /**
     * Runs before each test.
     * - Visits the NBS Source homepage.
     * - Accepts cookies.
     * - Searches for 'Dyson'.
     * - Selects the Dyson result from the search results.
     * - Skips the survey pop-up if it appears.
     */
    beforeEach(() => {
        NBSHomepage.visitHomepageAndAcceptCookies(); // Visit homepage and accept cookies
        NBSHomepage.searchFor('Dyson'); // Search for 'Dyson'
        NBSHomepage.selectDysonResult(); // Click on the Dyson search result
        DysonHomepage.checkAndSkipSurvey(); // Skip survey if present
    });

    /**
     * Scenario 1
     * Verifies that the manufacturer's homepage URL contains the expected text.
     */
    it('Scenario 1 - Verify the manufacturer homepage URL contains expected text (allowing for dynamic ID)', () => {
        DysonHomepage.verifyDysonPageUrl();
    });

    /**
     * Scenario 2
     * Verifies the telephone is visible and links to the correct 'tel:' protocol
     */
    it('Scenario 2 - Verify that the contact number is displayed and working correctly', () => {
        DysonHomepage.verifyContactNumber();
    });

    /**
     * Scenario 3
     * Verifies that the main page title (h1) is as expected.
     */
    it('Scenario 3 - Verify the h1 title text on the page is as expected', () => {
        DysonHomepage.verifyDysonPageTitle();
    });

    /**
     * Scenario 4
     * Verifies that the NBS Source logo link is visible and has the correct href attribute.
     */
    it('Scenario 4 - Verify the href attribute of the source logo is as expected', () => {
        DysonHomepage.verifySourceLogoLink();
    });

    /**
     * Scenario 5
     * Verifies that the "Architects & Designers" link has the correct href attribute.
     */
    it('Scenario 5 - Verify the href attribute of the "Architects & Designers" link is as expected', () => {
        DysonHomepage.verifyArchitectsDesignersHrefLink();
    });

    /**
     * Scenario 6
     * Verifies the accessibility of the Dyson manufacturer homepage using Axe.
     */
    it('Scenario 6 - Verify the Dyson homepage doesnt violate any Accessibility checks', () => {
        DysonHomepage.verifyAccessibility();
    });

    /**
     * Scenario 7
     * Performs an API call to verify the location in the API response and checks that the UI displays the correct locale.
     */
    it('Scenario 7 - Perform API call to verify location is correct in API response and UI', () => {
        DysonHomepage.verifyApiResponse();
    });

    /**
     * Scenario 8
     * Verifies that the Dyson navigation bar contains the correct tabs and links.
     */
    it('Scenario 8 -  Verify the Dyson navigation bar has the correct tabs and expected links', () => {
        DysonHomepage.verifyDysonNavigationBar();
    });

});


