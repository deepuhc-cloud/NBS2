describe('Regression Tests', () => {

    // Add at least one test block to complete the syntax
    it('Navigate to the source website', () => {

        cy.visit('https://source.thenbs.com/');

        cy.get('#onetrust-accept-btn-handler')
            .click();

        cy.get('[data-cy="searchFieldSearch"]').first()
            .type('Dyson');

        // Wait for the search results to appear and ensure "Dyson" is visible
        cy.contains("Dyson", { timeout: 10000 })
            .should("be.visible", { timeout: 10000 }) // Ensure the 'Dyson' element is visible
            .click(); // Click on the 'Dyson' element

        // Verify the URL
        cy.url().should('eq', 'https://source.thenbs.com/manufacturer/dyson/nakAxHWxDZprdqkBaCdn4U/overview');

        


    });
});
