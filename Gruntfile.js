/*Author: Tushar Borole
Discription:grunt configuration file
Copyright:NisosTechnologies 2014*/


'use strict';

module.exports = function (grunt) {

    // Grunt helpers
    //require('time-grunt')(grunt);
    require('autostrip-json-comments');
    var fs = require('fs');
    var scriptArray = [];

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Settings
    var appSettings = require('./config/application.conf.json');


    // grunt.config.init({
    grunt.initConfig({

        // Set the application settings
        settings: appSettings,

        // Server config
        connect: {
            options: {
                hostname: '<%= settings.dev.hostname %>',
                port: '<%= settings.dev.port %>',
                livereload: '<%= settings.dev.liveReloadPort %>',
                options: {
                    index: 'index.html',
                    maxAge: 300000
                }
            },
            livereload: {
                options: {
                    open: true,
                    base: [
            '.tmp',
            '<%= settings.dev.dir %>'
          ],
                    index: 'index.html'
                }
            },
            devel: {
                options: {
                    port: '<%= settings.dev.port %>',
                    hostname: '<%= settings.dev.hostname %>',
                    base: {
                        path: '<%= settings.dev.dir %>',
                        options: {
                            index: 'index.html'
                        }
                    },
                    middleware: function (connect, options, middlewares) {
                        middlewares.unshift(function (req, res, next) {
                            res.setHeader('Access-Control-Allow-Origin', '*');
                            res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
                            return next();


                        });

                        return middlewares;
                    }
                }
            },
            /*         logger: {
                prod: {
                    option: {
                        separator: ','
                    },
                    destination: "log/prod.log",
                    logItems: {
                        "date": grunt.template.today('yyyy-mm-dd hh:mm:ss'),
                        "version": "456",
                        "project": "<%= pkg.name %>",
                        "environment": "<%= pkg.env %>"
                    }
                },
                test: {
                    destination: "log/test.log",
                    options: {
                        separator: ','
                    },
                    logItems: {
                        "date": grunt.template.today('yyyy-mm-dd hh:mm:ss'),
                        "project": "<%= pkg.name %>",
                        "environment": "<%= pkg.env %>"
                    }
                }
            },*/
            test: {
                options: {
                    port: '<%= settings.test.port %>',
                    livereload: false,
                    base: [
            '.tmp',
            'test',
            '<%= settings.dev.dir %>'
          ]
                }
            },
            dist: {
                options: {
                    port: '<%= settings.dist.port %>',
                    hostname: '<%= settings.dist.hostname %>',
                    base: {
                        path: '<%= settings.dist.dir %>',
                        options: {
                            index: 'index.html',
                            maxAge: 300000
                        }
                    },
                    middleware: function (connect, options, middlewares) {
                        middlewares.unshift(function (req, res, next) {
                            res.setHeader('Access-Control-Allow-Origin', '*');
                            res.setHeader('Access-Control-Allow-Methods', '*');
                            return next();


                        });

                        return middlewares;
                    }
                }
            },
            coverage: {
                options: {
                    base: '<%= settings.test.coverage.dir %>',
                    directory: '<%= settings.test.coverage.dir %>',
                    port: '<%= settings.test.coverage.port %>',
                    keepalive: true,
                    livereload: false
                }
            }
        },

        // Watch config
        watch: {
            json: {
                files: ['<%= settings.dev.dir %>/**/*.json', '!<%= settings.dev.dir %>/core/*.json'],
                tasks: ['ngconstant:development',
            'merge-json',
            'ngconstant:assets',
            'ngconstant:url',
                       'ngconstant:error']
            }
        },

        // jsHint config
        jshint: {
            options: {
                jshintrc: __dirname + '/.jshintrc',
                reporter: require('jshint-stylish'),
                force: true
            },
            all: [
        // 'Gruntfile.js',
        '<%= settings.dev.dir %>/scripts/**/*.js'
      ],
            test: {
                options: {
                    jshintrc: __dirname + '/.jshintrc'
                },
                src: ['<%= settings.test.dir %>/**/*.js']
            }
        },

        /*uglify configuration*/
        uglify: {
            options: {
                mangle: false,
                compress: {
                    drop_console: true
                }
            },
            my_target: {
                files: [{
                    expand: true,
                    cwd: '<%= settings.dist.dir %>',
                    src: ['*.js', '**/*.js', '!assets/vendor/**'],
                    dest: '<%= settings.dist.dir %>'
        }]
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: '<%= settings.dist.dir %>',
                    src: ['*.css', '**/*.css', '!bower_components/**'],
                    dest: '<%= settings.dist.dir %>'
        }]
            }
        },

        // Vendor prefix config
        autoprefixer: {
            options: {
                browsers: ['last 1 version'] /* https://github.com/ai/autoprefixer#browsers */
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/styles/',
                    src: '**/*.css',
                    dest: '.tmp/styles/'
        }]
            }
        },

        // LESS config
        /*        less: {
            dev: {
                options: {
                    paths: ['<%= settings.dev.dir %>/styles/']
                },
                files: {
                    // '<%= settings.dev.dir %>/styles/main.css': '<%= settings.dev.dir %>/styles/main.less'
                    '.tmp/styles/main.css': '<%= settings.dev.dir %>/styles/main.less'
                }
            },
            dist: {
                options: {
                    paths: ['assets/css'],
                    cleancss: true
                },
                files: {
                    '<%= settings.dev.dir %>/styles/main.css': '<%= settings.dev.dir %>/styles/main.less'
                }
            }
        },*/

        // Clean config
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
            '.tmp',
            '<%= settings.dist.dir %>/*',
            '!<%= settings.dist.dir %>/.git*'
          ]
        }]
            },
            vendor: {
                files: [{
                    dot: true,
                    src: [
            '<%= settings.dist.dir %>/assets/vendor'
          ]
        }]
            },
            server: '.tmp',
            docs: '<%= settings.docs.dir %>',
            coverage: '<%= settings.test.coverage.dir %>'
        },

        // Copy config
        copy: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= settings.dev.dir %>',
                    dest: '<%= settings.dist.dir %>',
                    src: ['**/**', '!assets/vendor/**/**']
        }]
            }
        },

        // Build config - REV (rename)
        rev: {
            dist: {
                files: {
                    src: [
            '<%= settings.dist.dir %>/scripts/**/*.js',
            '<%= settings.dist.dir %>/styles/**/*.css',
            '<%= settings.dist.dir %>/images/**/*.{png,jpg,jpeg,gif,webp,svg}'
          ]
                }
            }
        },

        // Build config - usemin
        useminPrepare: {
            html: ['<%= settings.dev.dir %>/index.html'],
            options: {
                dest: '<%= settings.dist.dir %>'
            }
        },
        usemin: {
            html: ['<%= settings.dist.dir %>/**/*.html'],
            css: ['<%= settings.dist.dir %>/styles/**/*.css'],
            options: {
                assetsDirs: ['<%= settings.dist.dir %>']
            }
        },

        // Build config - imagemin
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= settings.dev.dir %>/images',
                    src: '**/*.{png,jpg,jpeg,gif}',
                    dest: '<%= settings.dist.dir %>/images'
        }]
            }
        },
        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= settings.dist.dir %>/fonts',
                    src: '**/*.svg',
                    dest: '<%= settings.dist.dir %>/fonts'
        }]
            }
        },


        minifyHtml: {
            options: {
                empty: true, // KEEP empty attributes
                cdata: true, // KEEP CDATA from scripts
                comments: false, // KEEP comments
                ssi: true, // KEEP Server Side Includes
                conditionals: true, // KEEP conditional internet explorer comments
                spare: true, // KEEP redundant attributes
                quotes: true, // KEEP arbitrary quotes
                loose: false // KEEP one whitespace
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= settings.dist.dir %>',
                    src: '<%= settings.files.htmlfile %>',
                    dest: '<%= settings.dist.dir %>'
        }]
            }
        },

        // Build config - Allow the use of non-minsafe AngularJS files.
        ngmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/concat/scripts',
                    src: '*.js',
                    dest: '.tmp/concat/scripts'
        }]
            }
        },
        ngAnnotate: {
            options: {
                singleQuotes: true,
            },
            app: {
                files: [
                    {
                        expand: true,
                        cwd: '.tmp/concat/scripts',
                        src: '*.js',
                        dest: '.tmp/concat/scripts'
                    },
                ],
            }
        },
        //configuration for cancatination of js and css
        concat: {
            missing: {
                nonull: true
            },
        },

        ngconstant: {
            // Options for all targets
            // Environment targets
            development: {
                options: {
                    dest: '<%= settings.dev.dir %>/core/config.constant.js',
                    space: '  ',
                    wrap: '\n\n {%= __ngModule %}',
                    name: 'Config',
                },
                constants: {
                    $enviornment: require('./config/development.json')
                }
            },
            staging: {
                options: {
                    dest: '<%= settings.dev.dir %>/core/config.constant.js',
                    space: '  ',
                    wrap: '\n\n {%= __ngModule %}',
                    name: 'Config',
                },
                constants: {
                    $enviornment: require('./config/staging.json')
                }
            },
            production: {
                options: {
                    dest: '<%= settings.dev.dir %>/core/config.constant.js',
                    space: '  ',
                    wrap: '\n\n {%= __ngModule %}',
                    name: 'Config',
                },
                constants: {
                    $enviornment: require('./config/production.json')
                }
            },
            mock: {
                options: {
                    dest: '<%= settings.dev.dir %>/core/config.constant.js',
                    space: '  ',
                    wrap: '\n\n {%= __ngModule %}',
                    name: 'Config',
                },
                constants: {
                    $enviornment: require('./config/mock.json')
                }
            },
            assets: {
                options: {
                    space: '  ',
                    wrap: '\n\n {%= __ngModule %}',
                    name: 'apprequire',
                    dest: '<%= settings.dev.dir %>/core/assets.constant.js'
                },
                /* constants: {
                     APP_REQUIRES: 'app/core/assets.json'
                 },*/

                constants: function () {
                    return {
                        APP_REQUIRES: grunt.file.readJSON('.tmp/assets.json')
                    };
                },

            },
            url: {
                options: {
                    space: '  ',
                    wrap: '\n\n {%= __ngModule %}',
                    name: 'url',
                    dest: '<%= settings.dev.dir %>/core/url.constant.js'
                },
                constants: function () {
                    return {
                        APP_URL: grunt.file.readJSON('.tmp/url.json')
                    };
                },

            },
            error: {
                options: {
                    space: '  ',
                    wrap: '\n\n {%= __ngModule %}',
                    name: 'error',
                    dest: '<%= settings.dev.dir %>/core/error.constant.js'
                },
                constants: function () {
                    return {
                        APP_ERROR: grunt.file.readJSON('.tmp/error.json')
                    };
                },

            }
        },

        // unit testing config
        karma: {
            unit: {
                configFile: './config/spec-unit.conf.js',
                autoWatch: false,
                singleRun: true
            },
            unitAuto: {
                configFile: './config/spec-unit.conf.js',
                autoWatch: true,
                singleRun: false
            },
            unitCoverage: {
                configFile: './config/spec-unit.conf.js',
                autoWatch: false,
                singleRun: true,
                reporters: ['progress', 'coverage'],
                preprocessors: {
                    'app/scripts/**.js': ['coverage'],
                    'app/views/**/*.html': ['ng-html2js']
                },
                coverageReporter: {
                    type: 'html',
                    dir: '<%= settings.test.coverage.dir %>'
                }
            },
            travis: {
                configFile: './config/spec-unit.conf.js',
                autoWatch: false,
                singleRun: true,
                browsers: ['PhantomJS']
            }
        },

        replace: {
            dist: {
                src: ['<%= settings.dist.dir %>/styles/*.css'],
                dest: '<%= settings.dist.dir %>/styles/',
                options: {
                    processTemplates: true
                },
                replacements: [{
                    from: /url\(\s*[\'"]?(\S*\.(?:jpe?g|gif|png))[\'"]?\s*\)[^;}]*?/ig,
                    to: function (matchedWord, index, fullText, regexMatches) {

                        //replace the css image path in dist copy
                        var string = matchedWord.replace("url(", "").replace(")", "");
                        var filename = string.substring(string.lastIndexOf('/') + 1);
                        var CssUrl = "url(../images/" + filename + ")";
                        return CssUrl;
                    }
    }]
            }
        },

        'merge-json': {
            assets: {
                src: ["<%= settings.dev.dir %>/**/*.script.json"],
                dest: ".tmp/assets.json"
            },
            url: {
                src: ["<%= settings.dev.dir %>/**/*.url.json"],
                dest: ".tmp/url.json"
            },
            error: {
                src: ["<%= settings.dev.dir %>/**/*.error.json"],
                dest: ".tmp/error.json"
            }
        },
        search: {
            obscenities: {
                files: {
                    src: ['.tmp/assets.json']
                },
                options: {
                    searchString: /"(.*|\n*)(\s*|\n*).(css|js)/ig,
                    logFile: ".tmp/match.json",
                    logFormat: "json",
                    onMatch: function (match) {

                        var matches = match.match.replace('"', '')
                        console.log(matches)
                        scriptArray.push(matches)
                            // called when a match is made. The parameter is an object of the
                            // following structure: { file: "", line: X, match: "" }
                    },
                    onComplete: function (matches) {
                        console.log(scriptArray)
                        var vendorScript = {
                            files: [{
                                expand: true,
                                cwd: '<%= settings.dev.dir %>',
                                dest: '<%= settings.dist.dir %>',
                                src: scriptArray
        }]
                        };
                        grunt.config.set('copy.vendor', vendorScript);
                        console.log(grunt.config.get('copy.vendor'))
                            //grunt.task.run("copy:vendor")
                            // called when all files have been parsed for the target. The
                            // matches parameter is an object of the format:
                            // `{ numMatches: N, matches: {} }`. The matches /property is
                            // an object of filename => array of matches
                    },
                }
            }
        },


        // Open config
        open: {
            dev: {
                path: 'http://<%= settings.dev.hostname %>:<%= settings.dev.port %>'
            },
            prod: {
                path: 'http://<%= settings.dev.hostname %>:<%= settings.dist.port %>'
            },
            docs: {
                path: 'http://<%= settings.dev.hostname %>:<%= settings.docs.port %>'
            },
            coverage: {
                path: 'http://<%= settings.dev.hostname %>:<%= settings.test.coverage.port %>'
            }
        },

        // Concurrent servers config
        concurrent: {
            servers: {
                tasks: [
          'server:dev',
          'server:dist',
          'server:docs',
          'server:test:unit',
          // 'server:test:e2e',
          'server:coverage'
        ],
                options: {
                    logConcurrentOutput: true,
                    limit: 20
                }
            },
            dev: [
        'watch:js',
        'watch:less',
        'watch:styles',
        'watch:livereload',
        'watch:gruntfile'
      ],
            test: [
        'less:dist',
        'copy:styles'
      ],
            dist: [
        'less:dist',
        'copy:styles',
        //'imagemin',
          'copy:image',
          'copy:font',
        'svgmin',
        //'copy:html'
      ]
        }



    });


    /* -- SERVER TASKS ----------------------------------------------- */

    /*  grunt.registerTask('server', 'Start up all servers.', [
      'concurrent:servers'
    ]);*/

    /* @discription
 n {string} it is build type can be development/mock*/
    grunt.registerTask('server', 'Start up the development live reload server', function (n) {
        if (n == null) {
            grunt.warn('Build type must be specified');
        }
        grunt.task.run('ngconstant:' + n,
            'merge-json',
            'ngconstant:assets',
            'ngconstant:url',
            'ngconstant:error',
            'connect:devel',
            // 'concurrent:dev'
            'watch:json');
    });




    grunt.registerTask('server:dist', 'Start up the production app preview server.', [
    'connect:dist',
          'watch'
  ]);
    grunt.registerTask('assetspath', function () {
        var done = this.async();



        var re = /\b.*(.js|.css)\b/g;
        var json = grunt.file.readJSON('app/core/assets.json')
        var str = JSON.stringify(json);
        console.log(str)
        var m;
        var array = [];

        while ((m = re.exec(str)) !== null) {
            if (m.index === re.lastIndex) {
                re.lastIndex++;
            }
            // View your result using the m-variable.
            // eg m[0] etc.
            //array.push(m[0])
            console.log(m[0])
        }
        setTimeout(function () {
            // console.log(array)
            done()
        }, 2000000)


    });






    /* @discription
     n {string} it is build type can be production/development/staging*/
    grunt.registerTask('build', 'Build a production ready app', function (n) {
        if (n == null) {
            grunt.warn('Build type must be specified');
        }

        //remove console from script
        if (n == "production") {
            grunt.config('uglify.options.compress.drop_console', true);
        } else {
            grunt.config('uglify.options.compress.drop_console', false);
        }



        //grunt.config('copy.vendor.files[0].src', finalCopyFiles);





        grunt.task.run('clean:dist',
            'ngconstant:' + n,
            'merge-json',
            'ngconstant:assets',
            'ngconstant:url',
            'ngconstant:error',
            'copy:dist',
            'search:obscenities',
            //'clean:vendor',
            'copy:vendor',
            'useminPrepare',
            'svgmin',
            'autoprefixer',
            'concat',
            'ngAnnotate',
            'cssmin',
            'uglify',
            'usemin',
            'replace:dist',
            'minifyHtml');
    });



    grunt.registerTask('default', 'Run all servers.', [
    'server'
  ]);
    //run task on file chage
    grunt.event.on('watch', function (action, filepath, target) {
        //grunt.task.run('server');
    });

    /**/



};