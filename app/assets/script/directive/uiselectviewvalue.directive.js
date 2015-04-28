(function () {
    'use strict';

    angular
        .module('seed')
        .directive('uiSelectViewValue', uiSelectViewValue);

    uiSelectViewValue.$inject = ['$parse','$timeout'];

    /* @ngInject */
    function uiSelectViewValue($parse,$timeout) {
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
            
                attrs.$observe('uiSelectViewValue', function (val) {
                $timeout(function () {
                    if (val.length > 0) {
                        controller[0].viewname = val;
                    }
                });
            });

            scope.$watch(attrs.ngModel, function (newval, oldval) {

                if (newval != oldval) {
                    if (angular.isDefined(controller[0].selected)) {
                        controller[0].viewname = controller[0].selected[attrs.uiSelectViewName];
                    }
                }

            }, true);
            
            
            
        }
    }

})();