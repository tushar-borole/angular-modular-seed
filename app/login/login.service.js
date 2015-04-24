(function() {
    'use strict';

    angular
        .module('seed')
        .controller('login', login);

    login.$inject = ['$rootScope'];

    /* @ngInject */
    function login($rootScope){
        var vm = this;
        vm.name = 'login';
            

        activate();

        ////////////////

        function activate() {
        }
    }
})();