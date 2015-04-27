(function () {
    'use strict';

    angular
        .module('seed')
        .directive('sweetalert', sweetalert);

    sweetalert.$inject = ['$parse'];

    /* @ngInject */
    function sweetalert($parse) {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            link: link
        };
        return directive;

        function link(scope, element, attrs, controller) {
            var sweetElement = angular.element(element)
            console.log(sweetElement)
            sweetElement.click(function () {
                var sweetOptions = scope.$eval(attrs.sweetOptions);
                var sweetConfirmOption = scope.$eval(attrs.sweetConfirmOption);
                var sweetCancelOption = scope.$eval(attrs.sweetCancelOption);


                swal(sweetOptions,
                    function (isConfirm) {
                        if (isConfirm) {
                            swal(sweetConfirmOption);
                            scope.$evalAsync(attrs.sweetOnConfirm);
                        } else {
                            swal(sweetCancelOption);
                             scope.$evalAsync(attrs.sweetOnCancel);
                        }
                    });

            })

        }
    }

})();