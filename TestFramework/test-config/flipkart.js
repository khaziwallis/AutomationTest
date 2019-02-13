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
        message: 'should have expected title in modal',
        testHook: {
            name: '',
            type: 'xpath',
            value: '/html/body/div[2]/div/div/div/div/div[1]/span/span',
            indexValue: 0
        },
        expected: {
            scope: 'current',
            value: 'Login'
        }
    }, {
        message: 'should have expected message in modal',
        testHook: {
            name: '',
            type: 'xpath',
            value: 'div div p span',
            indexValue: 0
        },
        expected: {
            scope: 'current',
            value: 'Get access to your Orders, Wishlist and Recommendations'
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
    }, {
        message: 'should have expected Login and Signup test',
        browserRefresh: true,
        testHook: {
            'name': 'href',
            'type': 'attribute',
            'value': '/account/login?ret=/',
            indexValue: 0
        },
        expected: {
            scope: 'current',
            value: 'Login & Signup'
        }
    }, {
        message: 'should have expected text on drop down',
        testHook: {
            'name': '',
            'type': 'selector',
            value: '#container > div > div._3ybBIU > div._1tz-RS > div._3pNZKl > div:nth-child(4) > div > div > span > div',
            indexValue: 0
        },
        expected: {
            scope: 'current',
            value: 'More'
        }

    }]
}];


