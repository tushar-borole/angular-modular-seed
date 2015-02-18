'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('karma'));

  var HomeCtrl
      , scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HomeCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of features to the scope', function () {
  console.log("inn")
  });
});
