module.exports = [
  {
    url: "http://localhost:3001",
    describeStatement: "testing of login page",
    expectedTests: [
      {
        testHook: {
          name: "ClassName",
          value: "userNameLbl"
        },
        message: "should have expected user name label",
        expected: "User Name"
      },
      {
        testHook: {
          name: "ClassName",
          value: "passwordLbl"
        },
        message: "should have expected password label",
        expected: "Password"
      },
      {
        testHook: {},
        message: "should set user name field with expected value",
        setValue: "accion",
        attribute: "value",
        expectedAttributeValue: "accion"
      },
      {
        testHook: "password",
        message: "should set password field with expected value",
        setValue: "success",
        attribute: "value",
        expectedAttributeValue: "success"
      },
      {
        testHook: "submitBtn",
        message: "should change the url on submit",
        action: "click",
        scope: "browser",
        method: "getCurrentUrl",
        expectedBrowserValue: "http://localhost:3001/home"
      },
      {
        testHook: "deleteUser",
        message: "should delete a user to the table",
        action: "click"
      },
      {
        testHook: "searchName",
        message: "should search for user in the table",
        action: "click"
      },
      {
        testHook: "searchName",
        message: "should search for user in the table",
        setValue: "Vinay",
        attribute: "value",
        expectedAttributeValue: "Vinay"
      },
      {
        testHook: "addUser",
        message: "should add a user to the table",
        action: "click"
      },
      {
        testHook: "newName",
        message: "should set name field with expected value",
        setValue: "Vinay",
        attribute: "value",
        expectedAttributeValue: "Vinay"
      },
      {
        testHook: "newCity",
        message: "should set city field with expected value",
        setValue: "Bengaluru",
        attribute: "value",
        expectedAttributeValue: "Bengaluru"
      }
      // {
      //   testHook: "logoutBtn",
      //   message: "should change the url on logout",
      //   action: "click",
      //   scope: "browser",
      //   method: "getCurrentUrl",
      //   expectedBrowserValue: "http://localhost:3001/"
      // }
    ]
  }
];
