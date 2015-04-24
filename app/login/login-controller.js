/*Author: Tushar Borole
Discription:Login page controller
Copyright:Seed Inc. 2014*/




app.controller('LoginCtrl', ['$scope', '$http', 'dataFactory', 'ipCookie', 'notify', '$translate', 'ngFabForm', '$state', 'APP_CONSTANTVALUE','$timeout','errorService','usSpinnerService',
function ($scope, $http, dataFactory, ipCookie, notify, $translate, ngFabForm, $state, APP_CONSTANTVALUE,$timeout,errorService,usSpinnerService) {


        /*Initialization of variable start*/
        $scope.login = {};
        $scope.customFormOptions = angular.copy(ngFabForm.config);

        /*Function to login the user
         * return authentication tocken which is saved in localstorage*/
        $scope.loginUser = function () {

            dataFactory.loginUser($scope.login).then(function (data) {
                ipCookie('auth', data);
                $http.defaults.headers.common[APP_CONSTANTVALUE.token] = ipCookie('auth').access_token;
                $timeout(function(){
                $state.go('seedapp.dashboard');
            });

            }, function () {
                 errorService.error('login.error.loginerror', 'btn-dange');
            });


        };


}]);
