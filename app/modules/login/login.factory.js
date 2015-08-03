/**
 *  * @description factory for login page
    * @author Tushar Borole
    * @createDate 05/06/2015
    * @copyright 2014 © Seed. All Rights Reserved.
    */



(function () {
    'use strict';
    angular
        .module('seed')
        .factory('loginFactory', loginFactory);

    loginFactory.$inject = ['Restangular','loginUrl','$enviornment'];

    /* @ngInject */
    function loginFactory(Restangular,loginUrl,$enviornment) {
        var exports = {
            login: login
        };


        return exports;

        ////////////////

        function login() {
            var url = loginUrl[$enviornment.urlname].login;
            var postType = restangularParams('post', $enviornment.urlname);
            return Restangular.withConfig(function (RestangularConfigurer) {
                RestangularConfigurer.setBaseUrl($enviornment.backendurl);
            })[postType.value](url)[postType.type]({
                status: status
            });
        }
    }
})();