module.exports = Object.create({
  getTestObj: function(testHook) {
    if (testHook.name === "IdName") {
      return this.getByIdName(testHook.value);
    } else if (testHook.name === "ClassName") {
      return this.getByClassName(testHook.value);
    } else {
      return this.getByAttribute("data-test-hook", testHook);
    }
  },

  //Select tag name by a method findElement using one of the location strategies i.e tagName()
  getByIdName: function(tagName) {
    return browser.driver.findElement(By.id(tagName));
  },

  //Select class name by a method findElement using one of the location strategies i.e className()
  getByClassName: function(className) {
    return browser.driver.findElement(By.className(className));
  },

  getByAttribute: function(attributeName, attributeValue) {
    return browser.driver.findElement(
      By.css("[" + attributeName + '="' + attributeValue + '"]')
    );
  }
});
