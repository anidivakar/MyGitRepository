$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com\\seleniumwebdriver\\SalesForce\\Login\\login.feature");
formatter.feature({
  "line": 1,
  "name": "Logging into Salesforce",
  "description": "\r\nIn order to work\r\nAs a sales person\r\nI want to login",
  "id": "logging-into-salesforce",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 7,
  "name": "Logging in salesforce",
  "description": "",
  "id": "logging-into-salesforce;logging-in-salesforce",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I go to \"loginURL\" on \"Mozilla\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I enter \"username\" as \"loadrunner.jmeter@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter \"password\" as \"pass@1234\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on \"loginButton\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "login should be \"success\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "loginURL",
      "offset": 9
    },
    {
      "val": "Mozilla",
      "offset": 23
    }
  ],
  "location": "LoginTest.I_go_to_salesforce(String,String)"
});
formatter.result({
  "duration": 49795153800,
  "error_message": "org.openqa.selenium.WebDriverException: Failed to connect to binary FirefoxBinary(C:\\Program Files\\Mozilla Firefox\\firefox.exe) on port 7055; process output follows: \n startup on e10srollout@mozilla.org version 1.0\r\n1498310295177\taddons.xpi\tDEBUG\tRegistering manifest for C:\\Program Files\\Mozilla Firefox\\browser\\features\\firefox@getpocket.com.xpi\r\n1498310295178\taddons.xpi\tDEBUG\tLoading bootstrap scope from C:\\Program Files\\Mozilla Firefox\\browser\\features\\firefox@getpocket.com.xpi\r\n1498310295182\taddons.xpi\tDEBUG\tCalling bootstrap method startup on firefox@getpocket.com version 1.0\r\n1498310295190\taddons.xpi-utils\tDEBUG\tStarting async load of XPI database C:\\Users\\pc\\AppData\\Local\\Temp\\anonymous8861972133428587520webdriver-profile\\extensions.json\r\n1498310295191\taddons.xpi\tDEBUG\tRegistering manifest for C:\\Program Files\\Mozilla Firefox\\browser\\features\\loop@mozilla.org.xpi\r\n1498310295192\taddons.xpi\tDEBUG\tLoading bootstrap scope from C:\\Program Files\\Mozilla Firefox\\browser\\features\\loop@mozilla.org.xpi\r\n1498310295198\taddons.xpi\tDEBUG\tCalling bootstrap method startup on loop@mozilla.org version 1.2.6\r\n1498310295219\taddons.manager\tDEBUG\tRegistering shutdown blocker for XPIProvider\r\n1498310295220\taddons.manager\tDEBUG\tProvider finished startup: XPIProvider\r\n1498310295220\taddons.manager\tDEBUG\tStarting provider: LightweightThemeManager\r\n1498310295220\taddons.manager\tDEBUG\tRegistering shutdown blocker for LightweightThemeManager\r\n1498310295220\taddons.manager\tDEBUG\tProvider finished startup: LightweightThemeManager\r\n1498310295220\taddons.manager\tDEBUG\tStarting provider: GMPProvider\r\n1498310295226\taddons.manager\tDEBUG\tRegistering shutdown blocker for GMPProvider\r\n1498310295227\taddons.manager\tDEBUG\tProvider finished startup: GMPProvider\r\n1498310295227\taddons.manager\tDEBUG\tStarting provider: PluginProvider\r\n1498310295227\taddons.manager\tDEBUG\tRegistering shutdown blocker for PluginProvider\r\n1498310295227\taddons.manager\tDEBUG\tProvider finished startup: PluginProvider\r\n1498310295228\taddons.manager\tDEBUG\tCompleted startup sequence\r\n1498310295492\taddons.xpi-utils\tDEBUG\tAsync JSON file read took 0 MS\r\n1498310295492\taddons.xpi-utils\tDEBUG\tFinished async read of XPI database, parsing...\r\n1498310295493\taddons.xpi-utils\tDEBUG\tSuccessfully read XPI database\r\n1498310295505\taddons.manager\tDEBUG\tStarting provider: \u003cunnamed-provider\u003e\r\n1498310295505\taddons.manager\tDEBUG\tRegistering shutdown blocker for \u003cunnamed-provider\u003e\r\n1498310295505\taddons.manager\tDEBUG\tProvider finished startup: \u003cunnamed-provider\u003e\r\n*** Blocklist::_loadBlocklistFromFile: blocklist is disabled\r\n1498310295610\taddons.manager\tDEBUG\tStarting provider: PreviousExperimentProvider\r\n1498310295610\taddons.manager\tDEBUG\tRegistering shutdown blocker for PreviousExperimentProvider\r\n1498310295610\taddons.manager\tDEBUG\tProvider finished startup: PreviousExperimentProvider\r\nCrash Annotation GraphicsCriticalError: |[0][GFX1-]: [D3D11] create component blender failed: 0x80070057, 0 (t\u003d27.54)[GFX1-]: [D3D11] create component blender failed: 0x80070057, 0\r\nJavaScript error: https://normandy-cloudfront.cdn.mozilla.net/static/bundles/selfrepair.afb53ff18f093e84a458.js, line 6: SyntaxError: missing \u003d in const declaration\r\n1498310307220\taddons.xpi\tDEBUG\tCalling bootstrap method shutdown on e10srollout@mozilla.org version 1.0\r\n1498310307221\taddons.xpi\tDEBUG\tCalling bootstrap method shutdown on firefox@getpocket.com version 1.0\r\n1498310307222\taddons.xpi\tDEBUG\tCalling bootstrap method shutdown on loop@mozilla.org version 1.2.6\r\n1498310307449\taddons.manager\tDEBUG\tshutdown\r\n1498310307449\taddons.manager\tDEBUG\tCalling shutdown blocker for XPIProvider\r\n1498310307449\taddons.xpi\tDEBUG\tshutdown\r\n1498310307450\taddons.xpi-utils\tDEBUG\tshutdown\r\n1498310307450\taddons.manager\tDEBUG\tCalling shutdown blocker for LightweightThemeManager\r\n1498310307451\taddons.manager\tDEBUG\tCalling shutdown blocker for GMPProvider\r\n1498310307453\taddons.manager\tDEBUG\tCalling shutdown blocker for PluginProvider\r\n1498310307453\taddons.manager\tDEBUG\tCalling shutdown blocker for \u003cunnamed-provider\u003e\r\n1498310307455\taddons.manager\tDEBUG\tCalling shutdown blocker for PreviousExperimentProvider\r\n1498310307457\taddons.xpi\tDEBUG\tNotifying XPI shutdown observers\r\n1498310307461\taddons.manager\tDEBUG\tAsync provider shutdown done\r\n\nBuild info: version: \u00272.28.0\u0027, revision: \u002718309\u0027, time: \u00272012-12-11 15:53:30\u0027\nSystem info: os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_111\u0027\nDriver info: driver.version: FirefoxDriver\r\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.start(NewProfileExtensionConnection.java:118)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.startClient(FirefoxDriver.java:244)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:110)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:188)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:183)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:179)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:92)\r\n\tat com.seleniumebdriver.SalesForce.Util.WebConnector.openBrowser(WebConnector.java:58)\r\n\tat com.seleniumwebdriver.SalesForce.Login.LoginTest.I_go_to_salesforce(LoginTest.java:16)\r\n\tat ✽.Given I go to \"loginURL\" on \"Mozilla\"(com\\seleniumwebdriver\\SalesForce\\Login\\login.feature:9)\r\nCaused by: org.openqa.selenium.firefox.NotConnectedException: Unable to connect to host 127.0.0.1 on port 7055 after 45000 ms. Firefox console output:\n startup on e10srollout@mozilla.org version 1.0\r\n1498310295177\taddons.xpi\tDEBUG\tRegistering manifest for C:\\Program Files\\Mozilla Firefox\\browser\\features\\firefox@getpocket.com.xpi\r\n1498310295178\taddons.xpi\tDEBUG\tLoading bootstrap scope from C:\\Program Files\\Mozilla Firefox\\browser\\features\\firefox@getpocket.com.xpi\r\n1498310295182\taddons.xpi\tDEBUG\tCalling bootstrap method startup on firefox@getpocket.com version 1.0\r\n1498310295190\taddons.xpi-utils\tDEBUG\tStarting async load of XPI database C:\\Users\\pc\\AppData\\Local\\Temp\\anonymous8861972133428587520webdriver-profile\\extensions.json\r\n1498310295191\taddons.xpi\tDEBUG\tRegistering manifest for C:\\Program Files\\Mozilla Firefox\\browser\\features\\loop@mozilla.org.xpi\r\n1498310295192\taddons.xpi\tDEBUG\tLoading bootstrap scope from C:\\Program Files\\Mozilla Firefox\\browser\\features\\loop@mozilla.org.xpi\r\n1498310295198\taddons.xpi\tDEBUG\tCalling bootstrap method startup on loop@mozilla.org version 1.2.6\r\n1498310295219\taddons.manager\tDEBUG\tRegistering shutdown blocker for XPIProvider\r\n1498310295220\taddons.manager\tDEBUG\tProvider finished startup: XPIProvider\r\n1498310295220\taddons.manager\tDEBUG\tStarting provider: LightweightThemeManager\r\n1498310295220\taddons.manager\tDEBUG\tRegistering shutdown blocker for LightweightThemeManager\r\n1498310295220\taddons.manager\tDEBUG\tProvider finished startup: LightweightThemeManager\r\n1498310295220\taddons.manager\tDEBUG\tStarting provider: GMPProvider\r\n1498310295226\taddons.manager\tDEBUG\tRegistering shutdown blocker for GMPProvider\r\n1498310295227\taddons.manager\tDEBUG\tProvider finished startup: GMPProvider\r\n1498310295227\taddons.manager\tDEBUG\tStarting provider: PluginProvider\r\n1498310295227\taddons.manager\tDEBUG\tRegistering shutdown blocker for PluginProvider\r\n1498310295227\taddons.manager\tDEBUG\tProvider finished startup: PluginProvider\r\n1498310295228\taddons.manager\tDEBUG\tCompleted startup sequence\r\n1498310295492\taddons.xpi-utils\tDEBUG\tAsync JSON file read took 0 MS\r\n1498310295492\taddons.xpi-utils\tDEBUG\tFinished async read of XPI database, parsing...\r\n1498310295493\taddons.xpi-utils\tDEBUG\tSuccessfully read XPI database\r\n1498310295505\taddons.manager\tDEBUG\tStarting provider: \u003cunnamed-provider\u003e\r\n1498310295505\taddons.manager\tDEBUG\tRegistering shutdown blocker for \u003cunnamed-provider\u003e\r\n1498310295505\taddons.manager\tDEBUG\tProvider finished startup: \u003cunnamed-provider\u003e\r\n*** Blocklist::_loadBlocklistFromFile: blocklist is disabled\r\n1498310295610\taddons.manager\tDEBUG\tStarting provider: PreviousExperimentProvider\r\n1498310295610\taddons.manager\tDEBUG\tRegistering shutdown blocker for PreviousExperimentProvider\r\n1498310295610\taddons.manager\tDEBUG\tProvider finished startup: PreviousExperimentProvider\r\nCrash Annotation GraphicsCriticalError: |[0][GFX1-]: [D3D11] create component blender failed: 0x80070057, 0 (t\u003d27.54)[GFX1-]: [D3D11] create component blender failed: 0x80070057, 0\r\nJavaScript error: https://normandy-cloudfront.cdn.mozilla.net/static/bundles/selfrepair.afb53ff18f093e84a458.js, line 6: SyntaxError: missing \u003d in const declaration\r\n1498310307220\taddons.xpi\tDEBUG\tCalling bootstrap method shutdown on e10srollout@mozilla.org version 1.0\r\n1498310307221\taddons.xpi\tDEBUG\tCalling bootstrap method shutdown on firefox@getpocket.com version 1.0\r\n1498310307222\taddons.xpi\tDEBUG\tCalling bootstrap method shutdown on loop@mozilla.org version 1.2.6\r\n1498310307449\taddons.manager\tDEBUG\tshutdown\r\n1498310307449\taddons.manager\tDEBUG\tCalling shutdown blocker for XPIProvider\r\n1498310307449\taddons.xpi\tDEBUG\tshutdown\r\n1498310307450\taddons.xpi-utils\tDEBUG\tshutdown\r\n1498310307450\taddons.manager\tDEBUG\tCalling shutdown blocker for LightweightThemeManager\r\n1498310307451\taddons.manager\tDEBUG\tCalling shutdown blocker for GMPProvider\r\n1498310307453\taddons.manager\tDEBUG\tCalling shutdown blocker for PluginProvider\r\n1498310307453\taddons.manager\tDEBUG\tCalling shutdown blocker for \u003cunnamed-provider\u003e\r\n1498310307455\taddons.manager\tDEBUG\tCalling shutdown blocker for PreviousExperimentProvider\r\n1498310307457\taddons.xpi\tDEBUG\tNotifying XPI shutdown observers\r\n1498310307461\taddons.manager\tDEBUG\tAsync provider shutdown done\r\n\r\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.start(NewProfileExtensionConnection.java:106)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.startClient(FirefoxDriver.java:244)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:110)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:188)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:183)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:179)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:92)\r\n\tat com.seleniumebdriver.SalesForce.Util.WebConnector.openBrowser(WebConnector.java:58)\r\n\tat com.seleniumwebdriver.SalesForce.Login.LoginTest.I_go_to_salesforce(LoginTest.java:16)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:44)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:12)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:40)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:35)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:38)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:268)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:45)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:40)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:36)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:83)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:77)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:82)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:50)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:675)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 9
    },
    {
      "val": "loadrunner.jmeter@gmail.com",
      "offset": 23
    }
  ],
  "location": "LoginTest.I_enter(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 9
    },
    {
      "val": "pass@1234",
      "offset": 23
    }
  ],
  "location": "LoginTest.I_enter(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "loginButton",
      "offset": 12
    }
  ],
  "location": "LoginTest.I_click_on(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "success",
      "offset": 17
    }
  ],
  "location": "LoginTest.login_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
});