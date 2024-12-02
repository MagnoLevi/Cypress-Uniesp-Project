Feature: I want to login into the site with valid data

    Background: Navigate to the Website
        Given User navigates to the Website

    Scenario: Loading the main page
        When User types in search bar
            | text          |
            | Consultar CPF |

        And User clicks on search button

        Then User search results are displayed

        And User scrolls the page down
        # Then User clicks on the consult CPF button