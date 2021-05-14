Feature: SHOW AND HIDE AN EVENT'S DETAILS

Scenario: User should see the event element is collapsed by default
Given the list of events has been loaded
When the user hasn’t clicked to show the event’s details
Then all the event’s details will be collapsed

Scenario: User can expand an event to see its details 
Given the list of events has been loaded
When the user clicks “show details” on an event
Then the event’s details will be shown

Scenario: User can collapse an event to hide its details 
Given the list of events has been loaded and the user has clicked “show details” on an event
When the user clicks “hide details” on an event
Then the event’s details will be hidden