"use strict";

describe("Test started...", function() {
  var testSuites = [
    {
      url: "http://localhost:3000",
      expectedTests: [
        {
          testHook: "userNameLbl",
          message: "should have expected User Name label",
          expected: "User Name"
        },
        {
          testHook: "passwordLbl",
          message: "should have expected Password label",
          expected: "Password"
        }
      ]
    }
  ];

  // it("sample test", function() {
  //   expect("a").to.be.eql("a");
  // });
  before(function() {
    browser.driver.get(testSuites[0].url);
  });

  testSuites[0].expectedTests.forEach(function(testSuite) {
    it(testSuite.message, function() {
      var testObj = initlize.getTestObj(testSuite.testHook);
      expect(testObj.getText()).to.eventually.eql(testSuite.expected);
    });
  });
});
