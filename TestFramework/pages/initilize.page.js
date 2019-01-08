module.exports = Object.create({

	getTestObj: function (testHook, accessorType) {
		if (accessorType === 'TagName') {
			return this.getByTagName(testHook);

		} else if (accessorType === 'ClassName') {
			return this.getByClassName(testHook);

		} else {
			return this.getByAttribute('data-test-hook', testHook );
		}
	},

	//Select tag name by a method findElement using one of the location strategies i.e tagName()
	getByTagName: function (tagName) {
		return browser.driver.findElement(By.tagName(tagName));
	},

	//Select class name by a method findElement using one of the location strategies i.e className()
	getByClassName: function (className) {
		return browser.driver.findElement(By.className(className));
	},

	getByAttribute: function (attributeName, attributeValue) {
		return browser.driver.findElement(By.css('['+ attributeName + '="'+ attributeValue +'"]'));
	}
});
