 App.constant('APP_REQUIRES', {
     // jQuery based and standalone scripts
     scripts: {
         'modernizr': ['bower_components/modernizr/modernizr.js'],
         'icons': ['bower_components/fontawesome/css/font-awesome.min.css'],
         'sweetalert': ['bower_components/sweetalert/lib/sweet-alert.min.js', 'bower_components/sweetalert/lib/sweet-alert.css', 'assets/script/directive/sweetalert.directive.js']
     },
     // Angular based script (use the right module name)
     modules: [
         {
             name: 'toaster',
             files: ['bower_components/angularjs-toaster/toaster.js', 'bower_components/angularjs-toaster/toaster.css']
         },
         {
             name: 'ui.select',
             files: ['assets/script/directive/select.js',
                                                  'assets/css/select.min.css', 'assets/script/directive/uiselectremote.directive.js', 'assets/script/directive/uiselectviewvalue.directive.js']
         }
    ],
     // Angular based script (use the right module name)
     angularscript: [
         {
             name: 'login',
             files: ['login/login.controller.js', 'login/login.factory.js', 'assets/script/directive/sweetalert.directive.js']
         }
    ]

 });