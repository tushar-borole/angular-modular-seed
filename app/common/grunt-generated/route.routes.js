/*Author: Tushar Borole
Discription:It contain page route information
Copyright:Seed Inc. 2014*/

 angular
        .module('seed').config(['$stateProvider', '$locationProvider', '$urlRouterProvider', 'RouteHelpersProvider',
function ($stateProvider, $locationProvider, $urlRouterProvider, helper) {
        'use strict';

        // Set the following to true to enable the HTML5 Mode
        // You may have to set <base> tag in index and a routing configuration in your server
        $locationProvider.html5Mode(false);

        // default route
        $urlRouterProvider.otherwise('/app/login');

        // 
        // Application Routes
        // -----------------------------------   
        $stateProvider
            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'common/views/app.html'
            })
            .state('app.submenu', {
                url: '/submenu',
                title: 'Submenu',
                templateUrl: 'common/views/submenu.html'
            })
            // 
            // CUSTOM RESOLVES
            //   Add your own resolves properties
            //   following this object extend
            //   method
            // ----------------------------------- 
            // .state('app.someroute', {
            //   url: '/some_url',
            //   templateUrl: 'path_to_template.html',
            //   controller: 'someController',
            //   resolve: angular.extend(
            //     helper.resolveFor(), {
            //     // YOUR RESOLVES GO HERE
            //     }
            //   )
            // })
        ;


}]);
 
 
 
 
;/*Author: Tushar Borole
Discription:It contain page route information
Copyright:Seed Inc. 2014*/

      angular
        .module('seed').config(['$ocLazyLoadProvider', 'APP_REQUIRES', function ($ocLazyLoadProvider, APP_REQUIRES) {
        'use strict';

        // Lazy Load modules configuration
        $ocLazyLoadProvider.config({
            debug: false,
            events: true,
            modules: APP_REQUIRES.modules
        });

}]).config(['$controllerProvider', '$compileProvider', '$filterProvider', '$provide',
    function ($controllerProvider, $compileProvider, $filterProvider, $provide) {
            'use strict';
            // registering components after bootstrap
            App.controller = $controllerProvider.register;
            App.directive = $compileProvider.directive;
            App.filter = $filterProvider.register;
            App.factory = $provide.factory;
            App.service = $provide.service;
            App.constant = $provide.constant;
            App.value = $provide.value;

}]).config(['cfpLoadingBarProvider', function (cfpLoadingBarProvider) {
        cfpLoadingBarProvider.includeBar = true;
        cfpLoadingBarProvider.includeSpinner = false;
        cfpLoadingBarProvider.latencyThreshold = 500;
        cfpLoadingBarProvider.parentSelector = '.wrapper > section';
}]).config(['$tooltipProvider', function ($tooltipProvider) {

        $tooltipProvider.options({
            appendToBody: true
        });

}]);
; /*Author: Tushar Borole
 Discription:It contain page route information
 Copyright:Seed Inc. 2014*/

 angular
     .module('seed').config(['$stateProvider', 'RouteHelpersProvider',
function ($stateProvider, helper) {
             'use strict';

             $stateProvider
                 .state('app.login', {
                     url: '/login',
                     title: 'Single View',
                     templateUrl: 'modules/login/login.html',
                     controller: 'LoginController',
                     controllerAs: 'login',
                     resolve: helper.resolveFor('modernizr', 'icons', 'toaster', 'sweetalert', 'ui.select', 'login')
                 })



}]);