(function() {
  'use strict';

  angular
    .module('client')
    .service('detailModel', DetailModel);

function DetailModel($http, $q) {    
    console.log('ModelDetail');
    
    this.getDetails = function(id){
        
        return $http({
            method: 'GET',
            url:'http://localhost:4001/api/v1/phones/'+id
        }).then(function(response){ 
            return response.data;
        },function (reject) {
          console.log(reject);
        });
    
    };
    
    this.getComments = function(id){
        return $http({
            method: 'GET',
            url:"http://localhost:4001/api/v1/comments/"+id
        }).then(function(response){ 
            return response.data;
        },function (reject) {
          console.log(reject);
        });
    
    };

}
})();