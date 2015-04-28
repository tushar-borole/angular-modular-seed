/*Author: Tushar Borole
Discription:It contain url depend on mock or development
Copyright:Seed Inc. 2014*/
(function () {
    'use strict';
     angular
        .module('seed').constant('APP_URL', {
        'development': {
            'login': 'api/login'

        },
        'mock': {
            'login': 'assets/json/login.json'
        }
    });
}())