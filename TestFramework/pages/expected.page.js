module.exports.expectResult  = function(testExpect, testObj, expect, browser) {
    if (testExpect.scope === 'current') {
        if (testExpect.attribute) {
            expect(testObj.getAttribute(testExpect.attribute)).to.eventually.eql(
                testExpect.value
            );
        } else {
            expect(testObj.getText()).to.eventually.eql(testExpect.value);
        }
        return true;
    } else if (testExpect.scope === 'browser') {
        expect(browser[testExpect.method]()).to.eventually.eql(
            testExpect.value
          );
        return true;
    }
    return 'NaExpect';
};