"use strict";

describe('Test started...', function () {
	var testSuites = [{
        url: 'http://localhost:9000',
        describeStatement: 'testing of login page',
        expectedTests: [{
            testHook: 'userNameLbl',
            message: 'should have expected user name label',
            expected: 'Username'
        }, {
            testHook: 'passwordLbl',
            message: 'should have expected password label',
            expected: 'Password'
        }, {
            testHook: 'userName',
            message: 'should set user name field with expected value',
            setValue: 'accion',
            attribute: 'value', 
            expectedAttributeValue: 'accion'
        }, {
            testHook: 'password',
            message: 'should set password field with expected value',
            setValue: 'success',
            attribute: 'value',
            expectedAttributeValue: 'success'
        }, {
            testHook: 'submitBtn',
            message: 'should change the url on submit',
            action: 'click',
            scope: 'browser',
            method: 'getCurrentUrl',
            expectedBrowserValue: 'http://localhost:9000/home'
        }]
    }];

    testSuites.forEach(function (testSuite) {
        describe(testSuite.describeStatement, function () {
            before(function () {
                browser.driver.get(testSuite.url);
            });

            testSuite.expectedTests.forEach(function (testCase) {
                it(testCase.message, function () {
                    /* initialization module: will initialize javascript DOM object
                        input: test hook on html which need to be accessed as javascript DOM element
                        output: will return javascript DOM element
                    */
                    var testObj = initlize.getTestObj(testCase.testHook);

                    /* action module: will perform all pre actions before expect statement
                        input: javascript DOM element, on which action need to be performed
                        action: will expection different action, based on input in suite
                        output: javascript DOM element against which validation need to be performed
                    */
                    if (testCase.setValue) {
                        testObj.sendKeys(testCase.setValue);
                    }
                    if (testCase.action) {
                        if (testCase.action === 'click') {
                            testObj.click();
                        }
                    }

                    if (testCase.scope === 'browser') {
                        testObj = browser;
                    }
                    
                    /* expect module: will perform validation
                        input: javascript DOM element against which validation need to be perfomed based on suite
                    */
                   
                    if (testCase.expected) {
                        expect(testObj.getText()).to.eventually.eql(testCase.expected);
                    } else if (testCase.expectedAttributeValue) {
                        expect(testObj.getAttribute(testCase.attribute)).to.eventually.eql(testCase.expectedAttributeValue);
                    } else if (testCase.expectedBrowserValue) {
                        expect(testObj[testCase.method]()).to.eventually.eql(testCase.expectedBrowserValue);
                    }
                });
            });
        });
    });

});
