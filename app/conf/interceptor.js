/*Author: Tushar Borole
Discription:Interceptor for angular
Copyright:Karma Worldwide Inc. 2014*/

'use strict';
app.run(function ($rootScope, $state, Restangular, $location,$timeout) {
    Restangular.setResponseExtractor(function (response, operation) {
        if (operation === 'getList') {
            var newResponse = response.resp;

            return newResponse;
        }
        return response;
    });
    Restangular.setErrorInterceptor(function (response, deferred, responseHandler) {
        if (response.status === 401) {

            $location.path('app.login')
            return true; // error handled
        }

        return true; // error not handled
    });
});
