module.exports = Object.create({
	getTestObj: function (testHook) {
		return browser.driver.findElement(by.css('[data-test-hook="'+ testHook +'"]'));
	}
});