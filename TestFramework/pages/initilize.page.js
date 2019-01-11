module.exports = Object.create({

	getTestObj: function (testHook) {
		if (testHook.name === 'IdName') {
			return this.getByIdName(testHook.value);

		} else if (testHook.name === 'ClassName') {
			return this.getByClassName(testHook.value);

		} else if (testHook.name === 'TagName'){
			const classValue = $(testHook.value);
			const tagValue = classValue.$$('label')[1].$('span').getText();
			return this.getByTagName(tagValue);
		
		} else {
			return this.getByAttribute('data-test-hook', testHook);
		}
	},

	//Select tag name by a method findElement using one of the location strategies i.e tagName()
	getByIdName: function (IdName) {
		return browser.driver.findElement(By.id(IdName));
	},

	//Select class name by a method findElement using one of the location strategies i.e className()
	getByClassName: function (className) {
		return browser.driver.findElement(By.className(className));
	},

	//Select class name by a method findElement using one of the location strategies i.e tag()
	getByTagName: function(tagName){
		return browser.driver.findElement(By.tagName(tagName));
	},

	getByAttribute: function (attributeName, attributeValue) {
		return browser.driver.findElement(By.css('['+ attributeName + '="'+ attributeValue +'"]'));
	}
});
