module.exports = Object.create({
	getTestObj: function (testHook) {
		if (testHook.type === 'attribute') {
			return this.getTestObjByAttribute(testHook.name, testHook.value, testHook.indexValue);
			//return browser.driver.findElement(by.css('[data-test-hook="'+ testHook.value +'"]'));
		} else if (testHook.type === 'class') {
			return this.getTestObjByClass(testHook.name, testHook.value, testHook.indexValue);
		} else if (testHook.type === 'tag') {
			return this.getTestObjByTag(testHook.name, testHook.value, testHook.indexValue);
		} else if (testHook.type === 'xpath') {
			return this.getTestObjByXPath(testHook.name, testHook.value, testHook.indexValue);
		}
		debug;
		return 'NaTestObj';
	},
	getTestObjByAttribute:  function (name, value, indexValue) {
		if (indexValue === 'all') {
			return $$('[' + name + '="'+ value +'"]');
		}
		return $$('['+ name +'="'+ value +'"]').get(indexValue);
	},

	getTestObjByTag: function (name, value, indexValue) {
		if (indexValue === 'all') {
			return $$(''+ value);
		}
		return $$(''+ value).get(indexValue);
	},

	getTestObjByXPath: function (name, value, indexValue) {
		if (indexValue === 'all') {
			return $$(''+ value);
		}
		return $$(''+ value).get(indexValue);	
	},

	getTestObjByClass:  function (name, value, indexValue) {
		if (indexValue === 'all') {
			return $$('.' + value);
		}
		return $$('.' + value).get(indexValue);
	}
});