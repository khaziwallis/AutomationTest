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
        } else if (testHook.type === 'selector') {
            return this.getTestObjBySelector(testHook.name, testHook.value, testHook.indexValue);
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
            return $$(value);
        }
        return $$(value).get(indexValue);
    },

    getTestObjBySelector: function (name, value, indexValue) {
        if (indexValue === 'all') {
            return $$(value);
        }
        return $$(value).get(indexValue);
    },

    getTestObjByXPath: function (name, value, indexValue) {
        // will replace all / to apces to match protractor formate xpath from browser
        if (value[0] === '/') {
            value = value.slice(1, value.length);
        }
        value = value.split('/').join('>');

        let rootElement;
        if (value.indexOf('[') !== -1 && value.indexOf(']') !== -1) {
            /*
                str = 'html body div[2] div div div div div[1] span span'
                tagsArr = str.split(']');
                html body div[2
                div div div div div[1
                span span
            */
            let tagsArr = value.split(']');

            tagsArr.forEach(function (tag) {
                if (tag[0] === '>') {
                    tag = tag.slice(1, value.length);
                }
                if (tag.indexOf('[') !== -1) {
                    let index = tag[tag.length - 1];
                    index = index - 1;
                    let actualtTag = tag.slice(0, tag.length - 2);
                    if (rootElement) {
                        /*console.log('actualtTag', actualtTag, index);
                        rootElement.$$(actualtTag).getAttribute('class').then(function (classes) {
                            console.log('classes', classes);
                        });
                        rootElement.$$(actualtTag).then(function (items) {
                            console.log('length:' + items.length);
                        });*/
                        rootElement = rootElement.$$(actualtTag).get(index);
                    } else {
                        /*console.log('actualtTag', actualtTag, index);
                        $$(actualtTag).getAttribute('class').then(function (classes) {
                            console.log('classes', classes);
                        });
                        $$(actualtTag).then(function (items) {
                            console.log('length:' + items.length);
                        });*/
                        rootElement = $$(actualtTag).get(index);
                    }
                } else {
                    let actualtTag = tag;
                    /*console.log('actualtTag', actualtTag);
                    rootElement.$$(actualtTag).getAttribute('class').then(function (classes) {
                        console.log('classes', classes);
                    });
                    rootElement.$$(actualtTag).then(function (items) {
                        console.log('length:' + items.length);
                    });*/
                    rootElement = rootElement.$$(actualtTag);
                }
            });
        }
        
        if (!rootElement) {
            rootElement = $$(value);
        }

        if (indexValue === 'all') {
            return rootElement;
        }
        return rootElement.get(indexValue); 
    },

    getTestObjByClass:  function (name, value, indexValue) {
        if (indexValue === 'all') {
            return $$('.' + value);
        }
        return $$('.' + value).get(indexValue);
    }
});