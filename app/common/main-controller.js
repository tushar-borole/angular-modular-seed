/*Author: Tushar Borole
Discription:rOOT OF ALL CONTROLLER
Copyright:Copyright:Seed Inc. 2014*/


/**
 * MainCtrl - controller
 */
app.controller('MainCtrl', ['$scope', '$http', 'ipCookie', '$state', 'APP_CONSTANTVALUE', 'Restangular',
function ($scope, $http, ipCookie, $state, APP_CONSTANTVALUE, Restangular) {



        $scope.menbarJson = [];

        /*Sidebar json is loaded to generate sidebar from static json*/
        $http.get("json/menubar.json").success(function (data) {
            $scope.menubarJson = data;
        });


        /*function to logout from application*/
        $scope.logOut = function () {

            ipCookie.remove('auth');
            delete $http.defaults.headers.common[APP_CONSTANTVALUE.token];
            $state.go('app.login');
            $scope.$apply();

        };

        $scope.angularCopy = function (data) {
            var copyData = angular.copy(data);
            return copyData;
        };


        /*common function to get address and location from google apis
         * @param {string} address name to be search with googel apis
         * @param {string} name of scope to be repeated */
        $scope.getLocation = function (address, scopename) {




            var params = {
                address: address,
                sensor: false
            };

            $http.get('http://maps.googleapis.com/maps/api/geocode/json', {
                params: params,
                headers: {
                    'X-Auth-Token': undefined
                }
            }).then(function (response) {
                $scope[scopename] = response.data.results;
            });



        }

}]);
