

 angular.module('apprequire', [])

.constant('APP_REQUIRES', {library:[{name:'icons',files:['assets/vendor/modernizr/modernizr.js']},{name:'modernizr',files:['assets/vendor/fontawesome/css/font-awesome.min.css']},{name:'sweetalert',files:['assets/vendor/sweetalert/lib/sweet-alert.min.js','assets/vendor/sweetalert/lib/sweet-alert.css','common/directive/sweetalert.directive.js']}],modules:[{name:'toaster',files:['assets/vendor/angularjs-toaster/toaster.js','assets/vendor/angularjs-toaster/toaster.css']},{name:'ui.select',files:['common/directive/select.js','assets/css/select.min.css','common/directive/uiselectremote.directive.js','common/directive/uiselectviewvalue.directive.js']}],app:[{name:'login',files:['modules/login/loin.controller.js','modules/login/login.factory.js','common/directive/sweetalert.directive.js']}]})

;