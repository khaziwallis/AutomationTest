'use strict';

describe('Test started...', function () {
	var testSuites = [{
        url: 'http://localhost:9000',
        expectedTests: [{
            testHook: 'title-label',
            message: 'should have expected title label',
            expected: 'Title:',
        }, {
            testHook: 'title-value',
            message: 'should have expected title',
            expected: 'Test Title',
        }, {
            testHook: 'description-label',
            message: 'should have expected description label',
            expected: 'Description:',
        }, {
            testHook: 'description-value',
            message: 'should have expected description',
            expected: 'test description',
        }]
    }];

	before(function () {
		navigation.go(testSuites[0].url);
	});

	_.each(testSuites[0].expectedTests, function (testSuite) {
		it(testSuite.message, function () {
			var testObj = initlize.getTestObj(testSuite.testHook);
			expect(testObj.getText()).to.eventually.eql(testSuite.expected);
		});
	});
});
