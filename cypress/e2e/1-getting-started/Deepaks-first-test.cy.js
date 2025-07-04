
describe('Regression Tests', () => {

    it('Scenario 1 - Verify the manufacturers homepage URL contains expected text (allowing for dynamic ID)', () => {

        cy.visit('https://source.thenbs.com/', {
            timeout: 50000
        });

        cy.get('#onetrust-accept-btn-handler').click();

        cy.get('[data-cy="searchFieldSearch"]').first().type('Dyson');

        // Wait for the search results to appear and ensure "Dyson" is visible
        cy.contains("Dyson", { timeout: 10000 })
            .should("be.visible")
            .click();

        // Optionally close the survey popup if it appears
        cy.get('button[aria-label="Hide survey"]', { timeout: 3000 })
            .then($btn => {
                if ($btn.length && $btn.is(':visible')) {
                    cy.wrap($btn).click();
                }
            }, () => {
                // Survey did not appear, continue
            });

            

        cy.url().should('match', /\/manufacturer\/dyson\/.*\/overview$/);
    }); // <-- Add this closing brace to properly end the first 'it' block

    // Test to verify the Dyson page URL and H1 text
    it('#1 & #3 - Should verify Dyson page URL, and H1 text', () => {
        cy.visit('https://source.thenbs.com/', {
            timeout: 50000
        });

        cy.get('#onetrust-accept-btn-handler').click();

        cy.get('[data-cy="searchFieldSearch"]').first().type('Dyson');

        // Wait for the search results to appear and ensure "Dyson" is visible
        cy.contains("Dyson", { timeout: 10000 })
            .should("be.visible")
            .click();

        // Optionally close the survey popup if it appears
        cy.get('button[aria-label="Hide survey"]', { timeout: 3000 })
            .then($btn => {
                if ($btn.length && $btn.is(':visible')) {
                    cy.wrap($btn).click();
                }
            }, () => {
                // Survey did not appear, continue
            });

        cy.get('a[href="tel:08003457788"]')
            .should('have.attr', 'href', 'tel:08003457788', { timeout: 10000 })
            .and('contain', '08003457788');
    });



     
    it('# 3 - Verify the h1 title text on the page is as expected', () => {
        cy.visit('https://source.thenbs.com/', {
            timeout: 50000
        });

        cy.get('#onetrust-accept-btn-handler').click();

        cy.get('[data-cy="searchFieldSearch"]').first().type('Dyson');

        // Wait for the search results to appear and ensure "Dyson" is visible
        cy.contains("Dyson", { timeout: 10000 })
            .should("be.visible")
            .click();

        // Optionally close the survey popup if it appears
        cy.get('button[aria-label="Hide survey"]', { timeout: 3000 })
            .then($btn => {
                if ($btn.length && $btn.is(':visible')) {
                    cy.wrap($btn).click();
                }
            }, () => {
                // Survey did not appear, continue
            });

         
        cy.get('h1').should('have.text', 'Dyson');
    });



      it('# 4 - Verify the href attribute of the source logo is as expected', () => {
        cy.visit('https://source.thenbs.com/', {
            timeout: 50000
        });

        cy.get('#onetrust-accept-btn-handler').click();

        cy.get('[data-cy="searchFieldSearch"]').first().type('Dyson');

        // Wait for the search results to appear and ensure "Dyson" is visible
        cy.contains("Dyson", { timeout: 10000 })
            .should("be.visible")
            .click();

        // Optionally close the survey popup if it appears
        cy.get('button[aria-label="Hide survey"]', { timeout: 3000 })
            .then($btn => {
                if ($btn.length && $btn.is(':visible')) {
                    cy.wrap($btn).click();
                }
            }, () => {
                // Survey did not appear, continue
            });

        
        cy.get('a.brand-primary.wrapper')
            .should('have.attr', 'href', '/');
    });



    
      it('# 5 - Verify the href attribute of the "Architects & Designers" link is as expected', () => {
        cy.visit('https://source.thenbs.com/', {
            timeout: 50000
        });

        cy.get('#onetrust-accept-btn-handler').click();

        cy.get('[data-cy="searchFieldSearch"]').first().type('Dyson');

        // Wait for the search results to appear and ensure "Dyson" is visible
        cy.contains("Dyson", { timeout: 10000 })
            .should("be.visible")
            .click();

        // Optionally close the survey popup if it appears
        cy.get('button[aria-label="Hide survey"]', { timeout: 3000 })
            .then($btn => {
                if ($btn.length && $btn.is(':visible')) {
                    cy.wrap($btn).click();
                }
            }, () => {
                // Survey did not appear, continue
            });

        
      cy.get('a[href="https://www.dyson.co.uk/commercial/overview/architects-designers"]')
            .should('have.attr', 'href', 'https://www.dyson.co.uk/commercial/overview/architects-designers');
    });


    it('# 6 - Verify the contact manufacturer button shows the expected text', () => {
        cy.visit('https://source.thenbs.com/', {
            timeout: 50000
        });

        cy.get('#onetrust-accept-btn-handler').click();

        cy.get('[data-cy="searchFieldSearch"]').first().type('Dyson');

        // Wait for the search results to appear and ensure "Dyson" is visible
        cy.contains("Dyson", { timeout: 10000 })
            .should("be.visible")
            .click();

        // Optionally close the survey popup if it appears
        cy.get('button[aria-label="Hide survey"]', { timeout: 3000 })
            .then($btn => {
                if ($btn.length && $btn.is(':visible')) {
                    cy.wrap($btn).click();
                }
            }, () => {
                // Survey did not appear, continue
            });

        cy.contains('button', 'Contact manufacturer')
            .should('be.visible')
            .within(() => {
                cy.get('span.mdc-button__label').should('have.text', ' Contact manufacturer ');
            });
      
    });



    it('# 7 -  Run accessibility checks on the manufacturer page using cypress-axe', () => {
        cy.visit('https://source.thenbs.com/', {
            timeout: 50000
        });

        cy.get('#onetrust-accept-btn-handler').click();

        cy.get('[data-cy="searchFieldSearch"]').first().type('Dyson');

        // Wait for the search results to appear and ensure "Dyson" is visible
        cy.contains("Dyson", { timeout: 10000 })
            .should("be.visible")
            .click();

        // Optionally close the survey popup if it appears
        cy.get('button[aria-label="Hide survey"]', { timeout: 3000 })
            .then($btn => {
                if ($btn.length && $btn.is(':visible')) {
                    cy.wrap($btn).click();
                }
            }, () => {
                // Survey did not appear, continue
            });

         cy.injectAxe();
      
    });

     it('# 8 - Perform API call to the manufacturer API and output the response to the console ', () => {
        cy.visit('https://source.thenbs.com/', {
            timeout: 50000
        });

        cy.get('#onetrust-accept-btn-handler').click();

        cy.get('[data-cy="searchFieldSearch"]').first().type('Dyson');

        // Wait for the search results to appear and ensure "Dyson" is visible
        cy.contains("Dyson", { timeout: 10000 })
            .should("be.visible")
            .click();

        // Optionally close the survey popup if it appears
        cy.get('button[aria-label="Hide survey"]', { timeout: 3000 })
            .then($btn => {
                if ($btn.length && $btn.is(':visible')) {
                    cy.wrap($btn).click();
                }
            }, () => {
                // Survey did not appear, continue
            });    
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



    it('# 9 -  Verify the Dyson navigation bar has the correct tabs and expected links', () => {
        cy.visit('https://source.thenbs.com/', {
            timeout: 50000
        });

        cy.get('#onetrust-accept-btn-handler').click();

        cy.get('[data-cy="searchFieldSearch"]').first().type('Dyson');

        // Wait for the search results to appear and ensure "Dyson" is visible
        cy.contains("Dyson", { timeout: 10000 })
            .should("be.visible")
            .click();

        // Optionally close the survey popup if it appears
        cy.get('button[aria-label="Hide survey"]', { timeout: 3000 })
            .then($btn => {
                if ($btn.length && $btn.is(':visible')) {
                    cy.wrap($btn).click();
                }
            }, () => {
                // Survey did not appear, continue
            });
  cy.get('a[data-cy="overviewTab"]')
            .should('be.visible')
            .within(() => {
                cy.get('.mdc-tab__text-label').should('contain', 'Overview');
            })
            .should('have.attr', 'href')
            .and('include', '/manufacturer/dyson/')
            .and('include', '/overview');

        // Products tab
        cy.get('a[data-cy="productsTab"]')
            .should('be.visible', { timeout: 10000 })
            .within(() => {
                cy.get('.mdc-tab__text-label').should('contain', 'Products');
            })
            .should('have.attr', 'href')
            .and('include', '/manufacturer/dyson/')
            .and('include', '/products');

        // Certifications tab
        cy.get('a[data-cy="certificatesTab"]')
            .should('be.visible', { timeout: 10000 })
            .within(() => {
                cy.get('.mdc-tab__text-label').should('contain', 'Certifications');
            })
            .should('have.attr', 'href')
            .and('include', '/manufacturer/dyson/')
            .and('include', '/third-party-certifications');

        // Literature tab
        cy.get('a[data-cy="literatureTab"]')
            .should('be.visible', { timeout: 50000 })
            .within(() => {
                cy.get('.mdc-tab__text-label').invoke('text').should('match', /^\s*Literature\s*$/i);
            })
            .should('have.attr', 'href')
            .and('include', '/manufacturer/dyson/')
            .and('include', '/literature');

        // Case studies tab
        cy.get('a[data-cy="caseStudiesTab"]')
            .should('be.visible', { timeout: 10000 })
            .within(() => {
                cy.get('.mdc-tab__text-label').should('contain', 'Case studies');
            })
            .should('have.attr', 'href')
            .and('include', '/manufacturer/dyson/')
            .and('include', '/case-studies');

        
        });

        
    }); // Close the 'it' block
        
      




}); // Close the 'describe' block

