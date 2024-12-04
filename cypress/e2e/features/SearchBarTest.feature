Feature: I want to utilize the search bar

    Background: Navigate to the Main Page
        Given User navigates to the Main Page

    Scenario: Loading the main page
        When User types in search bar
            | text          |
            | Consultar CPF |

        And User clicks on search button

        Then User search results are displayed

        And User scrolls the page down
        # Then User clicks on the consult CPF button