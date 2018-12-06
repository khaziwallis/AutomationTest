module.exports = [{
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

  
      
      
      

