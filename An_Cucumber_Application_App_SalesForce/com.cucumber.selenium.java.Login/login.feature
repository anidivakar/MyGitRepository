Feature: Logging into Salesforce

In order to work
As a sales person
I want to login

Scenario: Logging in salesforce

Given I go to "loginURL" on "Mozilla"
And I enter "username" as "loadrunner.jmeter@gmail.com"
And I enter "password" as "pass@1234"
And I click on "loginButton"
Then login should be "success"