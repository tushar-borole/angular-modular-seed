To run a project

To setup the project


npm install -g grunt
npm install -g grunt-cli
npm install -d
bower install





## Commands

Run these commands from your favourite terminal:

`$ grunt server` - start dev server, docs server, prod preview server & auto unit testing server. Use this when doing everyday developing while auto testing alongside

`$ grunt server:dev` - start only the dev server

`$ grunt server:test` - start only the auto unit test server

`$ grunt server:dist` - start only the prod preview server

`$ grunt server:docs` - start only the docs server

`$ grunt test` - start the auto unit test server, alias for 'grunt autotest:unit'

`$ grunt test:unit` - single run on unit tests

`$ grunt test:coverage` - run a unit test coverage report

`$ grunt test:e2e` - single run of e2e tests

`$ grunt autotest:e2e` - start the auto e2e unit test server

`$ grunt build` - build a production ready app

`$ grunt docs` - build the docs and start the docs server

`$ grunt docs:build` - build the api documentation



## Configuration

This is a list of the files which are configurable:

`config/application.conf.json` - settings for setting application

`config/environment.conf.json` - settings for setting up your environment

`config/spec-unit.conf.json` - settings for your unit tests

`config/spec-e2e.conf.json` - settings for your e2e tests

`Gruntfile.js` - core grunt task runner be sure you know what your doing when changing this!

`bower.json` - add JavaScript dependencies

`package.json` - add NPM package dependencies



## Directory

This is the main directory structure.

<pre>
├── app/                // app folder contains your angular app development files
│
├── config/             // config folder contains all configs for your app
│
├── dist/               // dist folder contains the latest production build of your app
│
├── test/               // test folder contains all your app test specs
│
├── .bowerrc            // stores bower appPath
├── .gitignore          // files to be ignored by git
├──  .jshintrc          // settings for your jshint checks
├── .travis.yml         // app CI build status
├── api.doc             // used solely for api doc generation
├── bower.json          // app javascript dependencies
├── Gruntfile.js        // master grunt configuration for running tasks
├── package.json        // app dependencies / npm packages
├── LICENSE             // app license
├── README.md           // app readme
</pre>


## Servers

### Development Server
Runs on default port: `9000`

This provides you with a nicely automated workflow with AngularJS. On save it provides live page reload, jshint code syntax checking, source maps support, LESS file compilation & autoprefixing of css styles for legacy browsers. You can also view your Bootstrap 3 UI on this page with live reload `:9000/ui.html`.

### API Documentation Server
Runs on default port: `9999`

This provides API documentation for your AngularJS app.

### Unit Testing Server
Runs on default port: `9090`

This provides automated unit testing for AngularJS using Karma test runner.

### Unit Testing Code Coverage Server
Runs on default port: `5555`

This provides code coverage reports for unit tests which are served off port 5555.

### End-to-end Testing Server
Runs on default port: `9000`

This uses Selenuim WebDriver & AngularJS Protractor Framework to automate actual browser e2e testing.

### Production Preview Server
Runs on default port: `9009`

This provides a quick way to view your latest production build.



## Troubleshooting

### Installing NodeJS & NPM

If your having problems installing NodeJS we recommend taking a look at the following:

* http://www.joyent.com/blog/installing-node-and-npm
* https://gist.github.com/isaacs/579814


### Installing Bower

You can install bower using NPM as follows:

`$ npm install -g bower`

Then install your dependencies like so:

`$ bower install`

The path the dependencies are installed to is specified in `.bowerrc`. We recommend not changing this as it will alter settings your development server and build process.


### Installing Ruby & COMPASS

The easiest way to install COMPASS is through Ruby Gem using RVM.

Using RVM:

<pre>
$ curl -L https://get.rvm.io | bash -s stable --rails --autolibs=enabled --ruby=1.9.3
$ . ~/.profile
$ source /etc/profile.d/rvm.sh
$ rvm install 2.0.0
$ rvm use 2.0.0
$ ruby -v
</pre>

**Linux/Debian** you can run this to install ruby:

<pre>
$ sudo apt-get install ruby
$ ruby -v
</pre>

**Windows** users can opt to use the one click installer: http://rubyforge.org/projects/rubyinstaller/

Then install COMPASS through ruby gem:

<pre>
$ gem update --system
$ gem install compass
</pre>


### Installing Selenium, WebDriver & Protractor

The easiest way is to install Selenium Server using the [Protractor NPM package](https://github.com/angular/protractor):

`$ npm install -g protractor`

**Note:** You may need to update the [latest Chrome Driver](http://chromedriver.storage.googleapis.com/index.html) location in `config/spec-e2e.conf.json` depending on the OS your running. When you download it, extract and rename ending in .exe so will be an application.

<pre>
chromeDriver: './test/selenium/chromedriver-win32' // Windows
chromeDriver: './test/selenium/chromedriver-mac32' // Mac
chromeDriver: './test/selenium/chromedriver-linux32' // Linux
</pre>


The latest version of Selenium 2 comes with web driver. It's faster if you have the Selenium Server running in a sepereate terminal (optional) you can do this running this command:

`$ cd <project dir>`
`$ webdriver-manager start`

Then you can run the following in your main terminal to get the automated e2e testing running.

`$ grunt autotest:e2e`


**OR install them manually**

You can manually download the [latest Selenium Server .jar](https://code.google.com/p/selenium/downloads/list) file and the [latest Chrome Driver](http://chromedriver.storage.googleapis.com/index.html). Put the files into `/test/selenium/` and update your `config/spec-e2e.conf.json` with the following:

<pre>
seleniumServerJar: '../test/selenium/selenium-server-standalone-2.39.0.jar',   //absolute path or relative to project.
chromeDriver: '../test/selenium/chromedriver'
</pre>


## FAQ - Grunt

**Where do I add new grunt tasks?**

At the moment you will need to extend the Gruntfile.js. You can add options in the config/*.conf.js files to make life easier when developing.

**Does grunt support HTTPS?**

Yes but you will need to make some modifications to the server options in the Gruntfile.js file. See here for details: https://github.com/gruntjs/grunt-contrib-connect



