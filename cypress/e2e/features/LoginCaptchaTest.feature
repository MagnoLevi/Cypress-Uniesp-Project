Feature: I want to see the Captcha when login in

    Background: Navigate to the login page
        Given User navigates to the login page

    Scenario: Loading the login page
        When User types cpf input
            | cpf         |
            | 12345678900 |

        And User clicks on check cpf button