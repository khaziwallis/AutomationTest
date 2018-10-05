var Page = require('astrolabe').Page;

module.exports = Page.create({
	getTestObj: {
		value: function (testHook) {
			return $('[data-test-hook="'+ testHook +'"]');
		}
	}
});