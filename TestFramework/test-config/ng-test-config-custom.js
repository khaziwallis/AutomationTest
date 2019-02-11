module.exports = [{
    url: 'http://localhost:9000',
    describeStatement: 'testing of login page',
    expectedTests: [{
        testHook: {
            'name': '',
            'type': 'xpath',
            'value': '.login-layout #loginForm label',
            indexValue: 0
        },
        message: 'should have expected user name label',
        expected: {
            scope: 'current',
            value: 'Username'
        }
    }, {
        testHook: {
            'name': '',
            'type': 'tag',
            'value': 'form label',
            indexValue: 0
        },
        message: 'should have expected user name label',
        expected: {
            scope: 'current',
            value: 'Username'
        }
    },{
        testHook: {
            'name': '',
            'type': 'class',
            'value': 'userNameLbl',
            indexValue: 0
        },
        message: 'should have expected user name label',
        expected: {
            scope: 'current',
            value: 'Username'
        }
    }, {
        testHook: {
            'name': 'data-test-hook',
            'type': 'attribute',
            'value': 'user-name-lbl',
            indexValue: 0
        },
        message: 'should have expected user name label',
        expected: {
            scope: 'current',
            value: 'Username'
        }
    }, {
        message: 'should have expected user name label',
        testHook: {
            'name': '',
            'type': 'tag',
            'value': 'label',
            indexValue: 'all'
        },
        expected: {
            scope: 'current',
            value: [ 'Username', 'Password' ]
        }
    }, {
        message: 'should have expected password label',
        testHook: {
            'name': 'data-test-hook',
            'type': 'attribute',
            'value': 'user-password-lbl',
            indexValue: 0
        },
        expected: {
            scope: 'current',
            value: 'Password'
        }
    }, {
        message: 'should update text fields and submit to login',
        testHook: {
            'name': 'form',
            'type': 'tag',
            'value': 'form',
            indexValue: 0
        },
        action: {
            type: 'custom',
            customFunction: function (testObj) {
                testObj.$('[data-test-hook="user-password-field"]').sendKeys('success');
                testObj.$('[data-test-hook="user-name-field"]').sendKeys('accion');
                testObj.$('[data-test-hook="submitBtn"]').click();
            }
        },
        expected: {
            scope: 'browser',
            method: 'getCurrentUrl',
            value: 'http://localhost:9000/home'
        }
    }]
}];
