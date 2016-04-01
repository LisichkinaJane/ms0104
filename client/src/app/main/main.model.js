(function() {
  'use strict';

  angular
    .module('client')
    .service('mainModel', MainModel);

function MainModel($http, $q) {    
    console.log('Service Model');
    this.getItems = function(){
        return $http({
            method: 'GET',
            url:'http://localhost:4001/api/v1/phones'
        }).then(function(response){
           
            return response.data;
        },function (reject) {
          console.log(reject);
        });
    
    }
}
})();
