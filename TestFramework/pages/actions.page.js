module.exports.processActions  = function(action, testObj, browser, expect) { 
  if (action.type === 'custom') {
    action.customFunction(testObj);
  } else if (action.type === 'sendKeys') {
    testObj.sendKeys(action.value);
  } else if (action.type === 'click') {
    testObj.click();
  }
  return testObj;
}
