module.exports = [
  {
    url: "http://localhost:4200",
    describeStatement: "testing of login page",
    expectedTests: [
      {
        testHook: "registerBtn",
        message: "should change the url and go to register page",
        action: "click",
        scope: "browser",
        method: "getCurrentUrl",
        expectedBrowserValue: "http://localhost:4200/register"
      },
      {
        testHook: "regFirstName",
        message: "should set first name field with expected value",
        setValue: "demo",
        attribute: "value",
        expectedAttributeValue: "demo"
      },
      {
        testHook: "regLastName",
        message: "should set last name field with expected value",
        setValue: "test",
        attribute: "value",
        expectedAttributeValue: "test"
      },
      {
        testHook: "backBtn",
        message: "should change the url and go back to login page",
        action: "click",
        scope: "browser",
        method: "getCurrentUrl",
        expectedBrowserValue: "http://localhost:4200/login"
      },
      {
        testHook: "userName",
        message: "should set email with expected value",
        setValue: "vinay.k",
        attribute: "value",
        expectedAttributeValue: "vinay.k"
      },
      {
        testHook: "password",
        message: "should set password field with expected value",
        setValue: "12123",
        attribute: "value",
        expectedAttributeValue: "12123"
      },
      {
        testHook: "submitBtn",
        message: "should change the url on submit",
        action: "click",
        scope: "browser",
        method: "getCurrentUrl",
        expectedBrowserValue: "http://localhost:4200/homepage"
      },
      {
        testHook: "logoutBtn",
        message: "should change the url on logout",
        action: "click",
        scope: "browser",
        method: "getCurrentUrl",
        expectedBrowserValue: "http://localhost:4200/login"
      }
    ]
  }
];
