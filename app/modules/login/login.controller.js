/**
 *  * @description controller for login page
    * @author Tushar Borole
    * @createDate 05/06/2015
    * @copyright 2014 © Seed. All Rights Reserved.
    */


(function () {
    'use strict';

    angular
        .module('seed')
        .controller('LoginController', LoginController);

    function LoginController(loginFactory) {
        var login = this;
        // unresolved
        login.movies;
        console.log("inn")

        /**
         * @description Signin user
         * @lastmodifiedBy Tushar
         * @lastmodifiedDate 04/28/2015
         */
        login.signIn = function () {
            console.log("inn")
            login.loginUser = loginFactory.login().then(function () {}, function () {})


        }

        login.randomData = [];
        for (var i = 0; i < 500; i++) {
            login.randomData.push({
                'name': 'check' + i
            })
        }


    }
})();