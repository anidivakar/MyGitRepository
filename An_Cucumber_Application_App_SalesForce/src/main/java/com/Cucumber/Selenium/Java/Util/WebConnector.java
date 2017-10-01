package com.Cucumber.Selenium.Java.Util;
import java.io.FileInputStream;
import java.util.Properties;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class WebConnector {

	// Initializing properties file
	// Logging
	// Selenium Layers - selenium commands
	
	Properties OR = null;
	Properties CONFIG = null;
	WebDriver driver = null; 
	
	public WebConnector(){
	
	if(OR==null){
		try {
			//Initializing OR properties file
			OR = new Properties();
			FileInputStream fs = new FileInputStream(System.getProperty("user.dir")+"\\src\\main\\java\\com\\seleniumwebdriver\\SalesForce\\Config\\OR.properties");
			OR.load(fs);
			
			//Initializing CONFIG to corresponding env
			CONFIG = new Properties();
			fs = new FileInputStream(System.getProperty("user.dir")+"\\src\\main\\java\\com\\seleniumwebdriver\\SalesForce\\Config\\"+OR.getProperty("testEnv")+"_config.properties");
			CONFIG.load(fs);
				
			System.out.println("UserName ObjectKey value is --  "+OR.getProperty("loginusername"));
			System.out.println("The Production environment URL is --  "+CONFIG.getProperty("loginURL"));
			
		} /*catch (FileNotFoundException e) {
		
			System.out.println("Error Found");
			e.printStackTrace();
			}*/
		 catch (Exception e) {
			
			e.printStackTrace();
		} 		
				
	}
}
	
	public void openBrowser(String browserType){
		if(browserType.equals("Mozilla")){
		
			System.setProperty("webdriver.firefox.driver","C:\\Program Files\\Mozilla Firefox\\Firefox.exe");
			driver = new FirefoxDriver();
			
		}else if(browserType.equals("Chrome")){
			
			System.setProperty("webdriver.chrome.bin", "D:\\chromedriver\\chromedriver.exe");
			driver = new ChromeDriver();
		}
		
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	}
	
	//navigate to URL
	public void navigate(String loginURL){
		driver.get(CONFIG.getProperty(loginURL));
	}
	
	public void click(){
		
	}
	
	public void type(){
		
		
	}
	
	public void select(){
		
	}
	
	public boolean isElementPresent(){
		return true;
	}
	
	
}
