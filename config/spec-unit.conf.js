// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function(config) {
  config.set({

    // list of files / patterns to load in the browser

    // **/*.js: All files with a "js" extension in all subdirectories
    // **/!(jquery).js: Same as previous, but excludes "jquery.js"
    // **/(foo|bar).js: In all subdirectories, all "foo.js" or "bar.js" files

    files: [
        "app/bower_components/jquery/dist/jquery.js",
    "app/bower_components/angular/angular.min.js",
         "app/bower_components/angular-mocks/angular-mocks.js",
    "app/bower_components/jquery-ui/ui/jquery-ui.js",
    "app/bower_components/bootstrap/dist/js/bootstrap.min.js",
    "app/bower_components/metisMenu/dist/metisMenu.js",
    "app/bower_components/pace/pace.min.js",
    "app/bower_components/slimScroll/jquery.slimscroll.min.js",
    "app/bower_components/underscore/underscore-min.js",
    "app/bower_components/moment/min/moment.min.js",
    "app/scripts/inspinia.js",
    "app/bower_components/angular-ui-router/release/angular-ui-router.min.js",
    "app/bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js",
    "app/bower_components/angular-translate/angular-translate.min.js",
    "app/bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files.min.js",
    "app/bower_components/restangular/dist/restangular.min.js",
    "app/bower_components/angular-cookie/angular-cookie.min.js",
    "app/bower_components/angular-notify/dist/angular-notify.min.js",
    "app/scripts/conf/app.js",
    "app/scripts/conf/config.js",
    "app/scripts/conf/route.js",
    "app/scripts/conf/constant.js",
    "app/scripts/conf/url.js",
    "app/scripts/factory/dataFactory.js",
    "app/scripts/directive/custom.js",
    "app/scripts/controller/MainCtrl.js",
    "app/scripts/controller/LoginCtrl.js",
      'app/scripts/**/*.js',
      'test/mock/**/*.js',
      'test/spec-unit/controllers/*.js'
    ],

    // list of files / patterns to exclude
    exclude: [],

    /* Start these browsers, currently available:
      Chrome
      ChromeCanary
      PhantomJS
      Firefox
      Opera
      Internet Explorer
      Safari

    */
    browsers: [
      'PhantomJS'
    ],

    // http://karma-runner.github.io/0.8/config/preprocessors.html
    preprocessors: {
      'app/views/**/*.html': ['ng-html2js']
    },

    //https://github.com/karma-runner/karma-ng-html2js-preprocessor
    ngHtml2JsPreprocessor: {
      // strip this from the file path
      stripPrefix: 'app/',
      // prepend this to the
      // prependPrefix: '',
      // setting this option will create only a single module that contains templates
      // from all the files, so you can load them all with module('foo')
      // moduleName: 'templates'
    },

    // level of logging: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // base path, that will be used to resolve files and exclude
    basePath: '../',

    // web server port
    port: 9090,

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // Additional reporters, such as growl, junit, teamcity or coverage
    reporters: ['progress'],

    // Continuous Integration mode, if true, it capture browsers, run tests and exit
    // singleRun: false, // (set it grunt file)

    // enable / disable watching file and executing tests whenever any file changes
    // autoWatch: true, // (set it grunt file)

    // Enable or disable colors in the output (reporters and logs).
    colors: true

  });
};
