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

    function LoginController(loginFactory,errorService) {
        var login = this;
        // unresolved
      

        /**
         * @description Signin user
         * @lastmodifiedBy Tushar
         * @lastmodifiedDate 04/28/2015
         */
        login.signIn = function () {
            console.log("inn")
            login.loginUser = loginFactory.login().then(function () {}, function () {})


        }
        errorService.error("successfull in app","success")

        login.randomData = [];
        for (var i = 0; i < 500; i++) {
            login.randomData.push({
                'name': 'check' + i
            })
        }


    }
})();