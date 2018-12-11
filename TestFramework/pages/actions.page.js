module.exports.processActions  = function(testCase, testObj, browser) { 
   var processedObj;
   if (testCase.setValue) {
     testObj.sendKeys(testCase.setValue);
     }

     if (testCase.action) {
       if (testCase.action === 'click') {
        testObj.click();
       }
     }
 
    if (testCase.scope === 'browser') {
      processedObj = browser;
    } else {
      processedObj = testObj;
    }

    return processedObj;
 }

