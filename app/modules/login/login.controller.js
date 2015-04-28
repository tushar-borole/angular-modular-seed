/*Author: Tushar Borole
Discription:Login page controller
Copyright:Seed Inc. 2014*/


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