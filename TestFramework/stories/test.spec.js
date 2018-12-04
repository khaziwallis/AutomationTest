'use strict';

describe('Test started...', function () {
	var testSuites = [{
        url: 'http://localhost:9000',
        expectedTests: [{
            testHook: 'userNameLbl',
            message: 'should have expected user name label',
            expected: 'Username',
        }, {
            testHook: 'passwordLbl',
            message: 'should have expected pawwsord label',
            expected: 'Password',
        }]
    }];

	before(function () {
        browser.driver.get(testSuites[0].url);
	});

	testSuites[0].expectedTests.forEach(function (testSuite) {
		it(testSuite.message, function () {
			var testObj = initlize.getTestObj(testSuite.testHook);
			expect(testObj.getText()).to.eventually.eql(testSuite.expected);
		});
	});
});
