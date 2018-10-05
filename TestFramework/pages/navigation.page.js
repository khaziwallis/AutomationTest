/**
 * @namespace TestFrameWork
 */
module.exports = {
    go(destination) {
        return browser.get(destination || '');
    }
};
