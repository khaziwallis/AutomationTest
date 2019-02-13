"use strict";
var testSuites = require("../test-config/flipkart");

describe("Test started...", function() {
  testSuites.forEach(function(testSuite) {
    describe(testSuite.describeStatement, function() {
      before(function() {
        browser.driver.get(testSuite.url);
      });
      testSuite.expectedTests.forEach(function(testCase) {
        it(testCase.message, function() {
          if (testCase.browserRefresh) {
            browser.driver.navigate().refresh()
          }
          /* initialization module: will initialize javascript DOM object
            input: test hook on html which need to be accessed as javascript DOM element
            output: will return javascript DOM element
          */
          if (testCase.testHook) {
            var testObj = initlize.getTestObj(testCase.testHook);
          }
          if (testObj === 'NaTestObj') {
            console.log('accessor not configured properly: ', testCase.testHook);
          } else {
            /* action module: will perform all pre actions before expect statement
              input: javascript DOM element, on which action need to be performed
              action: will expection different action, based on input in suite
              output: javascript DOM element against which validation need to be performed
            */
            if (testCase.action) {
              testObj = action.processActions(testCase.action, testObj, browser, expect);
            }
            /* expect module: will perform all expect checks
              input: javascript DOM element, and chai expect
              action: will validate all the given expects
            */
            if (testCase.expected) {
              let result = expected.expectResult(testCase.expected, testObj, expect, browser);
              if (result === 'NaExpect') {
                console.log('action and expect not configured properly: ', testCase.testHook); 
              }
            }
          }
        });
      });
    });
  });
});
