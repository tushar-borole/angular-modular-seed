/*Author: Tushar Borole
Discription:angular app is setup from this file
Copyright:Seed Inc 2014*/


console.log("in app")
if (typeof $ === 'undefined') {
    throw new Error('This application\'s JavaScript requires jQuery');
}

// APP START
// ----------------------------------- 

var App = angular.module('seed', [
    'ngRoute',
    'ngAnimate',
    'ngStorage',
    'ngCookies',
    'pascalprecht.translate',
    'ui.bootstrap',
    'ngMessages',
    'ui.router',
    'oc.lazyLoad',
    'cfp.loadingBar',
    'ngSanitize',
    'ngResource',
    'ui.utils', 'permission','ngFabForm'
  ]);

App.run(["$rootScope", "$state", "$stateParams", '$window', '$templateCache', 'Permission','APP_CONSTANTVALUE', function ($rootScope, $state, $stateParams, $window, $templateCache, Permission,APP_CONSTANTVALUE) {
    // Set reference to access them from any scope
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $rootScope.$storage = $window.localStorage;
    $rootScope.$constant=APP_CONSTANTVALUE;

    // Uncomment this to disable template cache
    /*$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
        if (typeof(toState) !== 'undefined'){
          $templateCache.remove(toState.templateUrl);
        }
    });*/


    Permission.defineRole('admin', function (stateParams) {
        // If the returned value is *truthy* then the user has the role, otherwise they don't
        /*  if (!User) {
            return true; // Is anonymous
          }*/
        return true;
    });

    // Scope Globals
    // ----------------------------------- 
    $rootScope.app = {
        name: 'seed',
        description: 'Angular Bootstrap Admin Template',
        year: ((new Date()).getFullYear()),
        layout: {
            isFixed: true,
            isCollapsed: false,
            isBoxed: false,
            isRTL: false,
            horizontal: false,
            isFloat: false,
            asideHover: false,
            theme: null
        },
        useFullLayout: false,
        hiddenFooter: false,
        viewAnimation: 'ng-fadeInUp'
    };
    $rootScope.user = {
        name: 'John',
        job: 'ng-developer',
        picture: 'app/img/user/02.jpg'
    };

}]);