(function () {
    'use strict';

    angular
        .module('seed')
        .service('errorService', errorService);

    errorService.$inject = ['$http', 'toastr'];

    /* @ngInject */
    function errorService($http, toastr) {
        this.error = error;

        ////////////////

        function error(text,type) {
             toastr[type](text);
            
        }
    }
})();

