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
        message: 'should set user name field with expected value',
        testHook: {
            'name': 'data-test-hook',
            'type': 'attribute',
            'value': 'user-name-field',
            indexValue: 0
        },
        action: {
            type: 'sendKeys', //update, click
            value: 'accion'
        },
        expected: {
            scope: 'current',
            value: 'accion',
            attribute: 'value'
        }
    }, {
        message: 'should set password field with expected value',
        testHook: {
            'name': 'data-test-hook',
            'type': 'attribute',
            'value': 'user-password-field',
            indexValue: 0
        },
        action: {
            type: 'sendKeys',
            value: 'success'
        },
        expected: {
            scope: 'current',
            value: 'success',
            attribute: 'value'
        }
    }, {
        message: 'should change the url on submit',
        testHook: {
            'name': 'data-test-hook',
            'type': 'attribute',
            'value': 'submitBtn',
            indexValue: 0
        },
        action: {
            type: 'click'
        },
        expected: {
            scope: 'browser',
            method: 'getCurrentUrl',
            value: 'http://localhost:9000/home'
        }
    }]
}];
