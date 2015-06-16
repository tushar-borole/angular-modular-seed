/**
 *  * @description directive for login page
    * @author Tushar Borole
    * @createDate 05/06/2015
    * @copyright 2014 © Seed. All Rights Reserved.
    */


(function () {
    'use strict';

    angular
        .module('module')
        .directive('testDirective', testDirective);

    testDirective.$inject = ['$rootScope'];

    /* @ngInject */
    function testDirective($rootScope) {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: TestController,
            controllerAs: 'vm',
            link: link,
            restrict: 'A',
            scope: {}
        };
        return directive;

        function link(scope, element, attrs, controller) {
            
        }
    }

    TestController.$inject = ['$rootScope'];

    /* @ngInject */
    function TestController($rootScope) {
    }
})();