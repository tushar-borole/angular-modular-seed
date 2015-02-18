/**
  * Generate Dynamic restangular params
  *
  * @param {string} posttype http request type.
  * @param {string} name it is url env ie if mock or development.
  * @return {object} Returns one of matched object from var restType.
  */
 function restangularParams(posttype, name) {
     var restType = [{
         type: 'get',
         value: 'one'
    }, {
         type: 'post',
         value: 'all'
    }, {
         type: 'customDELETE',
         value: 'all'
    }, {
         type: 'customPUT',
         value: 'all'
    }, {
         type: 'getList',
         value: 'all'
    }, {
         type: 'customPOST',
         value: 'all'
    }];
     if ('mock' === name) {
         return restType[0];
     }
     for (var i = 0; i < restType.length; i++) {
         if (restType[i].type === posttype) {
             return restType[i];
         }
     }
 }
