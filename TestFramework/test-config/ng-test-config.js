module.exports = [{
        url: 'http://localhost:9000',
        describeStatement: 'testing of login page',

        expectedTests: [{
        //Accessing the value by class attribute.    
            testHook: {
             name: 'ClassName',
             value: 'userNameLbl'
            },
            message: 'should have expected user name label',
            expected: 'Username'

        }, {
         //Accessing the value by custom (data-test-hook) attribute.    
            testHook: {
                name: "TagName",
                value: "#loginForm"
            },
            message: 'should have expected password label',
            expected: 'Password'
        }, {
            testHook: 'userName',
            message: 'should set user name field with expected value',
            setValue: 'accion',
            attribute: 'value', 
            expectedAttributeValue: 'accion'

        }, {
         //Accessing the value by ID attribute.   
            testHook: {
                name: 'IdName',
                value:'password'
            },
            message: 'should set password field with expected value',
            setValue: 'success',
            attribute: 'value',
            expectedAttributeValue: 'success',

        }, {
            testHook: 'submitBtn',
            message: 'should change the url on submit',
            action: 'click',
            scope: 'browser',
            method: 'getCurrentUrl',
            expectedBrowserValue: 'http://localhost:9000/home'
        }]
      }];

  
      
      
      

