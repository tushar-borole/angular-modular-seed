 App.constant('APP_REQUIRES', {
     // jQuery based and standalone scripts
     scripts: {
         'modernizr': ['bower_components/modernizr/modernizr.js'],
         'icons': ['bower_components/fontawesome/css/font-awesome.min.css']
     },
     // Angular based script (use the right module name)
     modules: [
         {
             name: 'toaster',
             files: ['bower_components/angularjs-toaster/toaster.js', 'bower_components/angularjs-toaster/toaster.css']
         }
    ],
     // Angular based script (use the right module name)
     angularscript: [
         {
             name: 'login',
             files: ['login/login.controller.js']
         }
    ]

 });