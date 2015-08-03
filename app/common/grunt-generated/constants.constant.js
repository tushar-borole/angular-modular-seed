

 angular.module('constants', [])

.constant('APP_REQUIRES', {library:[{name:'icons',files:['assets/vendor/modernizr/modernizr.js']},{name:'modernizr',files:['assets/vendor/fontawesome/css/font-awesome.min.css']},{name:'sweetalert',files:['assets/vendor/sweetalert/lib/sweet-alert.min.js','assets/vendor/sweetalert/lib/sweet-alert.css','common/directive/sweetalert.directive.js']}],modules:[{name:'toaster',files:['assets/vendor/angularjs-toaster/toaster.js','assets/vendor/angularjs-toaster/toaster.css']},{name:'ui.select',files:['common/directive/select.js','assets/css/select.min.css','common/directive/uiselectremote.directive.js','common/directive/uiselectviewvalue.directive.js']}],app:[{serie:false,name:'login',files:['modules/login/login.controller.js','modules/login/login.factory.js','common/directive/sweetalert.directive.js','modules/login/login.constant.js','modules/login/login.error.js','modules/login/login.url.js']}]})

.constant('$enviornment', {analyticsAppId:'UA-XXXXXXXX-1',facebookAppId:'803251069707321',jsonurl:'',name:'development',backendurl:'http://seed.nisostech.com/karma/',backendurlngo:'http://seed.nisostech.com/karma-be-ngo/',backendurlsocial:'http://seed.nisostech.com/social/',urlname:'development',viewbasepath:'',jsonpath:'/json/detailJson/'})

;