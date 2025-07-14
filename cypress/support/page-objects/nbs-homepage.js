/**
 * Page Object Model for the NBS Source homepage.
 * This class contains selectors and actions for interacting with the homepage.
 */
class NBSHomepage {
    // ---------------------------
    // Selectors for homepage elements
    // ---------------------------
    acceptCookiesButton = 'button'; // Selector for the "Accept All Cookies" button
    searchField = '[data-cy="searchFieldSearch"]'; // Selector for the homepage search input field
    dysonResultText = 'Dyson'; // Text to identify the Dyson search result in the list

    // ---------------------------
    // Actions for interacting with the homepage
    // ---------------------------

    /**
     * Clicks the "Accept All Cookies" button on the homepage.
     * This ensures cookies are accepted before running further tests.
     */
acceptCookies() {
    cy.contains(this.acceptCookiesButton, 'Accept All Cookies').click({ force: true });
}


    /**
     * Types the provided search term into the homepage search field.
     * @param {string} term - The text to search for (e.g., "Dyson").
     */
    searchFor(term) {
        cy.get(this.searchField).first().type(term);
        
    }

    /**
     * Selects the Dyson result from the search results.
     * Waits for the result to be visible before clicking.
     */
    selectDysonResult() {
        cy.contains(this.dysonResultText, { timeout: 10000 }).should('be.visible').click();
    }
    /**
    * Main function to test image snapshot functionality.
     */
    VerifyNbsVisualRegression() {
        cy.viewport(1000, 4410); // Set a fixed viewport size to match the baseline snapshot
        cy.wait(2000); // Wait for 2 seconds to ensure the site has loaded and dynamic content is rendered
        cy.scrollTo('bottom'); // Scroll to the bottom to ensure all content is rendered
        cy.wait(1000); // Wait a bit after scrolling
        cy.matchImageSnapshot('dyson-homepage', {
            failureThreshold: 0.40, // Allow up to 40% difference
            failureThresholdType: 'percent',
        });
    }

}


// Export a singleton instance of the NBSHomepage class for use in tests
export default new NBSHomepage();