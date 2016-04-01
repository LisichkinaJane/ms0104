(function() {
  'use strict';

  angular
    .module('client')
    .directive('sorting', Directive)
    .controller('SortingController', SortingController);

  /** @ngInject */
 function Directive($http){
     return{
         restrict:'E',
         templateUrl: 'app/components/sorting/sorting.view.html',
         controller: SortingController
    }
 }
    
    function SortingController($scope){    
        console.log('sorting');
        
         $scope.addresses = [
        {'state': ''},
    ];

    $scope.lov_state = [
        {'lookupCode':'', 'description':'Sorting'},
        {'lookupCode': 'AL', 'description': 'Alabama'},
        {'lookupCode': 'FL', 'description': 'Florida'},
        {'lookupCode': 'CA', 'description': 'California'},
        {'lookupCode': 'DE', 'description': 'Delaware'}
    ];
        
    }
  
})();
    
