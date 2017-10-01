package com.seleniumwebdriver.SalesForce.Login;

import com.seleniumebdriver.SalesForce.Util.WebConnector;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class LoginTest {
	
	WebConnector selenium = new WebConnector();
	
	 @Given("^I go to \"([^\"]*)\" on \"([^\"]*)\"$")
	 public void I_go_to_salesforce(String URL, String browser){
		System.out.println("^I go to "+URL+" on "+browser);
		selenium.openBrowser(browser);
		selenium.navigate(URL);
	 }

	 @And("^I enter \"([^\"]*)\" as \"([^\"]*)\"$")
	 public void I_enter(String object, String text){
		System.out.println("Entering in "+object+" value -- "+text);
	 }

	 @And("^I click on \"([^\"]*)\"$")
	 public void I_click_on(String object){
		System.out.println("Clicking on "+object);
	 }

	 @Then("^login should be \"([^\"]*)\"$")
	 public void login_should_be(String expResult){
		System.out.println("Login -"+expResult);
	 }

}

	

