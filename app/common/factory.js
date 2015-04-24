 /*Author: Tushar Borole
   Discription:all restapis are Called from here
   Copyright:Seed Inc. 2014*/
 'use strict';



 /*It contain all common dfactorries required for all controller*/
 /*posttype: generate dynamic restangular; this is done because of static json we use
  * url:it take url from url.js
  * */
 app.factory('dataFactory', ['Restangular', 'APP_URL', 'APP_CONFIG', '$enviornment', '$http',
    function (Restangular, APP_URL, APP_CONFIG, $enviornment, $http) {
         return {
             loginUser: function (data) {
                 var url = APP_URL[$enviornment.urlname].loginuser;
                 var postType = restangularParams('post', $enviornment.urlname);
                 return Restangular[postType.value](url)[postType.type](data);
             },
             loggedInuser: function (data) {
                 var url = APP_URL[$enviornment.urlname].loggedinuser;
                 var postType = restangularParams('get', $enviornment.urlname);
                 return Restangular[postType.value](url)[postType.type](data);

             },
             getRoles: function () {
                 var url = APP_URL[$enviornment.urlname].getrole;
                 var postType = restangularParams('getList', $enviornment.urlname);
                 return Restangular[postType.value](url)[postType.type]().$object;

             },
             uploadImage: function (image) {
                 var url = APP_URL[$enviornment.urlname].imageupload;
                 /*  return Restangular[postType.value](url).withHttpConfig({ transformRequest: angular.identity })[postType.type](image, null, null, {'Content-Type': 'multipart/form-data', 'Accept':'/'});*/
console.log($enviornment.backendurl)
                 return $http.post($enviornment.backendurl + url, image, {
                     transformRequest: angular.identity,
                     headers: {
                         'Content-Type': undefined
                     }
                 });
             },
             getCountries: function () {
                 console.log($enviornment.appbaseurl)
                 return Restangular.oneUrl('countryJson', $enviornment.appbaseurl + '/json/country.json').getList().$object;


             }
         };
    }]);
