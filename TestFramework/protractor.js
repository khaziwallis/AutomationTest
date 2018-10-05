/*jshint node:true */
// For some reason 'grunt jshint' doesn't respect the node:true in the .jshintrc file, so we have to add it here

//var mockModules = require('./mockModules');

//require('it-each')();
//require('it-each')({ testPerIteration: true });

exports.setupTestGlobals = () => {
    _ = require('lodash');
    momentTz = require('moment-timezone');
    expect = require('chai').use(require('chai-as-promised')).expect;
    navigation = require('./pages/navigation.page');
    configurations = require('./pages/configurations.page');
    initlize = require('./pages/initilize.page');
};

exports.config = {
    framework: 'mocha',
    // The address of a running selenium server. If this is specified,
    // seleniumServerJar and seleniumPort will be ignored.
    seleniumAddress: 'http://localhost:4444/wd/hub',

    // A base URL for your application under test. Calls to protractor.get()
    // with relative paths will be prepended with this.
    baseUrl: 'http://localhost:9000',

    rootElement: '.ng-scope',

    suites: {
        default: ['stories/**/*.js']
    },

    suite: 'default',

    onPrepare: () => {
        browser.driver.manage().window().setSize(1366, 768);
        exports.setupTestGlobals();
    },

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: 'firefox'
    },

    mochaOpts: {
        timeout: (1000 * 60 * 5),
        reporter: require('mocha-spectreport-reporter'),
        reporterOptions: {
            console: true,
            screenshot: true,
            screenshotDir: 'test/screenshots/'
        },
        slow: 3000,
        ui: 'bdd',
        grep: /^(?!.*(#wip).*).*$/
    }
};