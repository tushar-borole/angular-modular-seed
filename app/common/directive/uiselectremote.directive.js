(function () {
    'use strict';

    angular
        .module('seed')
        .directive('uiSelectRemote', uiSelect);

    uiSelect.$inject = ['$parse', '$timeout'];

    /* @ngInject */
    function uiSelect($parse, $timeout) {
        // Usage:
        //
        // Creates:
        //
        var directive = {

            link: link,
            restrict: 'A',
            require: ['uiSelect', 'ngModel']

        };
        return directive;

        function link(scope, element, attrs, controller) {

             attrs.$observe('uiSelectRemoteSearch', function (val) {
                console.log(val);
            });

        }
    }

})();