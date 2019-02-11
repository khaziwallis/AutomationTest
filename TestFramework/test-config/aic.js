module.exports = [{
    url: 'https://www.flipkart.com/',
    describeStatement: 'testing of Flipkart portal',
    expectedTests: [{
        message: 'should have proper url of page',
        expected: {
            scope: 'browser',
            method: 'getCurrentUrl',
            value: 'https://www.flipkart.com/'
        }
    }, {
        message: 'should have expected input button',
        testHook: {
            'name': '',
            'type': 'xpath',
            'value': 'form div input',
            indexValue: 0
        },
        expected: {
            scope: 'current',
            value: ''
        }
    }, {
        message: 'should have expected close button',
        testHook: {
            'name': '',
            'type': 'xpath',
            'value': 'button',
            indexValue: 1
        },
        action: {
            type: 'click',
        },
        expected: {
            scope: 'browser',
            method: 'getCurrentUrl',
            value: 'https://www.flipkart.com/'
        }
    }, {
        message: 'should have expected search box.',
        testHook: {
            'name': 'title',
            'type': 'attribute',
            'value': 'Search for products, brands and more',
            indexValue: 0
        },
        action: {
            type: 'sendKeys',
            value: 'mobiles'
        },
        expected: {
            scope: 'current',
            attribute: 'value',
            value: 'mobiles'
        }
    }]
}];