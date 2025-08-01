Feature: Dyson Manufacturer Page Regression Tests

  Background:
    Given I am on the NBS Source homepage
    And I accept cookies if prompted
    And I search for "Dyson"
    And I select the Dyson result from the search results
    And I skip the survey if present

  Scenario: Verify the manufacturer homepage URL contains expected text
    Then the manufacturer homepage URL should contain the expected text

  Scenario: Verify that the contact number is displayed and working correctly
    Then the contact number should be displayed and link to the correct tel protocol

  Scenario: Verify the h1 title text on the page is as expected
    Then the h1 title should be as expected

  Scenario: Verify the href attribute of the source logo is as expected
    Then the source logo link should have the correct href

  Scenario: Verify the href attribute of the "Architects & Designers" link is as expected
    Then the "Architects & Designers" link should have the correct href

  Scenario: Verify the Dyson homepage doesn't violate any Accessibility checks
    Then the Dyson homepage should pass accessibility checks

  Scenario: Perform API call to verify location is correct in API response and UI
    Then the location in the API response and UI should be correct

  Scenario: Verify the Dyson navigation bar has the correct tabs and expected links
    Then the Dyson navigation bar should have the correct tabs and links

  Scenario: Verify Image snapshot functionality
    Then the image snapshot functionality should work

  Scenario: Scroll to the bottom of the homepage and verify scroll position and click back button
    When I scroll to the bottom of the homepage
    And I skip the survey if present
    And I click the back button
    Then the page should be scrolled back to the top