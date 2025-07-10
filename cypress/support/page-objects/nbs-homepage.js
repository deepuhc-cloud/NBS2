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


    visitNBSHomePageAndAcceptCookies() {
        cy.visit('https://source.thenbs.com/', {
            timeout: 50000
        });

        cy.get('#onetrust-accept-btn-handler').click();
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
}

// Export a singleton instance of the NBSHomepage class for use in tests
export default new NBSHomepage();