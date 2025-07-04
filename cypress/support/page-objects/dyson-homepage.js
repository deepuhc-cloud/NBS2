// Page Object Model for the Dyson manufacturer page on NBS Source
class DysonHomepage {
    // ---------------------------
    // Selectors for Dyson page elements
    // ---------------------------
    dysonUrlPart = '/manufacturer/dyson/nakAxHWxDZprdqkBaCdn4U/overview'; // Part of the URL unique to the Dyson manufacturer page
    dysonHeader = 'h1'; // Selector for the main page header (H1 tag)
    contactNumberLink = 'a[href="tel:08003457788"]'; // Selector for the phone number link
    websiteLink = 'a[href="https://www.dyson.co.uk/commercial/overview/architects-designers"]'; // Selector for the Dyson website link
    ContactButton = '.contact-button > .mdc-button__label'; // Selector for the "Contact manufacturer" button
    SourceLogoLink = '.left > app-product-logo-with-name > .wrapper'; // Selector for the NBS Source logo link
    ManufacturerHomepage = 'https://source.thenbs.com/manufacturer/dyson/nakAxHWxDZprdqkBaCdn4U/overview'; // Full URL for the Dyson manufacturer homepage
    DysonNavigationBar = '.mat-mdc-tab-links'; // Selector for the navigation bar containing page tabs
    //   APIEndPoint = 'https://manufacturers.thenbs.com/products/nbs-source'; // (Unused) Example API endpoint

    // ---------------------------
    // Actions and Verifications
    // ---------------------------

    /**
     * Checks if the survey "Skip" button is present and clicks it to close the survey pop-up.
     * This prevents the survey from interfering with other tests.
     */
    checkAndSkipSurvey() {
        cy.get('body').then($body => {
            if ($body.find('.css-15a5wy5').length > 0) {
                cy.get('.css-15a5wy5').click();
            }
        });
    }

    /**
     * Verifies that the current page URL contains the expected Dyson manufacturer path.
     * This confirms that the user is on the correct page, even if the ID in the URL changes.
     */
    verifyDysonPageUrl() {
        cy.url().should('include', this.dysonUrlPart);
    }

    /**
     * Verifies that the main page header (H1) displays the text "Dyson".
     * This checks that the correct manufacturer page is loaded.
     */
    verifyDysonPageTitle() {
        cy.get(this.dysonHeader).should('have.text', 'Dyson');
    }

    /**
     * Verifies the contact phone number link:
     * - Is visible on the page
     * - Displays the correct phone number
     * - Uses the correct "tel:" protocol in the href attribute
     */
    verifyContactNumber() {
        cy.get(this.contactNumberLink)
            .should('be.visible')
            .should('have.text', ' 08003457788 ');
        cy.get(this.contactNumberLink).should('have.attr', 'href', 'tel:08003457788');
    }

    // /**
    //  * Verifies the Dyson website link text:
    //  * - Is visible on the page
    //  * - Displays the correct link text ("Website")
    //  */
    // verifyWebsiteLink() {
    //     cy.get(this.websiteLink)
    //         .should('be.visible')
    //         .should('have.text', ' Website ');
    // }

    /**
     * Verifies the "Contact manufacturer" button:
     * - Is visible on the page
     * - Displays the correct button text
     */
    verifyContactButton() {
        cy.get(this.ContactButton)
            .should('be.visible')
            .should('have.text', ' Contact manufacturer ');
    }

    /**
     * Verifies the NBS Source logo link:
     * - Is visible on the page
     * - Displays the correct text for the logo
     * - Has the correct href attribute ("/")
     */
    verifySourceLogoLink() {
        cy.get(this.SourceLogoLink)
            .should('be.visible')
            .should('have.text', '\n      nbs-symbol\n      \n    NBS Source');
        cy.get(this.SourceLogoLink).should('have.attr', 'href', '/');
    }

    /**
     * Verifies that the "Architects & Designers" link:
     * - Has the correct href attribute pointing to the Dyson architects and designers page
     */
    verifyArchitectsDesignersHrefLink() {
        cy.get(this.websiteLink).should('have.attr', 'href', 'https://www.dyson.co.uk/commercial/overview/architects-designers');
    }

    /**
     * Runs an accessibility check on the Dyson manufacturer homepage using Axe.
     * - Visits the homepage
     * - Injects the Axe accessibility testing tool
     * - Logs any accessibility violations found (does not fail the test)
     */
    verifyAccessibility() {
        cy.visit(this.ManufacturerHomepage);
        cy.injectAxe();
        cy.checkA11y(null, null, (violations) => {
            // Log the violations without failing the test
            cy.task('log', violations);
            violations.forEach((violation) => {
                const nodes = Cypress.$(
                    violation.nodes.map((node) => node.target).join(',')
                );
                Cypress.log({
                    name: 'a11y error!',
                    consoleProps: () => violation,
                    $el: nodes,
                    message: `[${violation.id}] ${violation.help} (${violation.nodes.length} nodes)`,
                });
            });
        }, { timeout: 10000 }); // Allow up to 10 seconds for the check
    }

    /**
     * Makes an API request to check the user's location and verifies the UI displays the correct locale.
     * - Sends a GET request to the geolocation API
     * - Checks that the response country is "GB" (United Kingdom)
     * - Verifies that "UK" is present in the locale selection button on the page
     */
    verifyApiResponse() {
        cy.request({
            method: 'GET',
            url: 'https://geolocation.onetrust.com/cookieconsentpub/v1/geo/location',
            failOnStatusCode: false
        }).then((response) => {
            // The response is like: jsonFeed({...});
            const match = response.body.match(/jsonFeed\((.*)\);?/);
            if (!match) {
                throw new Error('Unexpected response format');
            }
            const body = JSON.parse(match[1]);

            // Check that the API response contains the correct country (GB)
            expect(body).to.have.property('country', 'GB');

            // Now check that "UK" is present in the DOM, even if hidden
            cy.get('button[aria-label="Choose locale"] .mdc-button__label')
                .should('exist')
                .invoke('text')
                .should('contain', 'UK');
        });
    }

    /**
     * Verifies the Dyson navigation bar:
     * - Is visible on the page
     * - Contains all expected tabs (Overview, Products, Certifications, Literature, Case studies, About us)
     */
    verifyDysonNavigationBar() {
        cy.get(this.DysonNavigationBar).should('be.visible');
        cy.get(this.DysonNavigationBar).within(() => {
            cy.contains('a', 'Overview').should('be.visible');
            cy.contains('a', 'Products').should('be.visible');
            cy.contains('a', 'Certifications').should('be.visible');
            cy.contains('a', 'Literature').should('be.visible');
            cy.contains('a', 'Case studies').should('be.visible');
            cy.contains('a', 'About us').should('be.visible');
        });
    }

    /**
     * Runs a visual regression test on the Dyson manufacturer homepage.
     * - Visits the homepage
     * - Sets a fixed viewport size
     * - Waits for the page and dynamic content to load
     * - Scrolls to the bottom to ensure all content is rendered
     * - Takes a screenshot and compares it to a baseline image
     * - Allows up to 40% difference before failing
     */
    VerifyDysonManufacturerVisualRegression() {
        cy.visit(this.ManufacturerHomepage);
        cy.viewport(1000, 4410);
        cy.wait(2000);
        cy.scrollTo('bottom');
        cy.wait(500);
        cy.matchImageSnapshot('dyson-homepage', {
            failureThreshold: 0.40,
            failureThresholdType: 'percent',
        });
    }
}

// Export a singleton instance of the DysonHomepage class for use
export default new DysonHomepage();