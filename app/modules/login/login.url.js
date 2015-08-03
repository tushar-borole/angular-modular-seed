angular.module('seed').constant('loginUrl', {
    "development": {
        "login": "api/login"

    },
    "mock": {
        "login": "assets/json/login.json"
    }
});