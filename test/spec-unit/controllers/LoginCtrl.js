'use strict';

describe('Controller: LoginCtrl', function () {

    // load the controller's module
    beforeEach(module('karma'));

    var HomeCtrl, scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        HomeCtrl = $controller('LoginCtrl', {
            $scope: scope
        });
    }));
    it('Variables is initialized', function () {
        expect(scope.login).toBeDefined();
    });
    it('Login Function works', function () {
        scope.loginUser()
    });
});
