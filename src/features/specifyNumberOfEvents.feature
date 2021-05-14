Feature: SPECIFY NUMBER OF EVENTS

Scenario: When user hasn’t specified a number, 32 is the default number
Given the page has loaded
When the user hasn’t specified a number
Then the amount of events shown by default is 32

Scenario: User can change the number of events they want to see
Given the page has loaded
When the user changes the amount of events to be shown
Then the amount of events shown will be the one the user specified