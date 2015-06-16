/**
 *  * @description service for login page
    * @author Tushar Borole
    * @createDate 05/06/2015
    * @copyright 2014 © Seed. All Rights Reserved.
    */



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