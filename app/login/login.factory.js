(function () {
    'use strict';
    angular
        .module
        .factory('login', login);

    function login() {
        var loginFactory = {};


        /**
         * @description [[ Function to make GetAllCenter API]]
         * @name centFactory.get
         * @param  {Object} data [[data contain Offset,Limit,Role,search keywords]]
         */
        loginFactory.get = function (data) {
            var url = APP_URL[$enviornment.urlname].getcenter;
            var postType = restangularParams('post', $enviornment.urlname);
            return Restangular[postType.value](url)[postType.type](data);
        };


    }
})();