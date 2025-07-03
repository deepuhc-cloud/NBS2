 describe('Regression Tests', () => {

    // Add at least one test block to complete the syntax
    it('Navigate to the source website', () => {

        cy.visit('https://source.thenbs.com/', {
            timeout: 50000
                   });
       
 
 cy.request({
          method: 'GET',
          url: 'https://cdn-ukwest.onetrust.com/scripttemplates/202302.1.0/assets/otCenterRounded.json',
          headers: {
            'Accept': 'application/json'
          },
          failOnStatusCode: false
        }).then((response) => {
          expect(response.status).to.eq(200);
          // Output the response body to the console
          // eslint-disable-next-line no-console
                  console.log('API Response:', response.body);
                });
            });
        
        });
          
