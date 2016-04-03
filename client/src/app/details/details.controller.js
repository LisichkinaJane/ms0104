(function() {
  'use strict';

  angular
    .module('client')
    .controller('DetailsController', DetailsController);

  /** @ngInject */
  function DetailsController($http, $scope, detailModel, $stateParams) {
    console.log("Details ctrl init");
       var dt = this;
      
    dt.item = {};
      debugger;
    detailModel.getDetails($stateParams.id)
      .then(function (data) {
        dt.item = data;
        dt.url = data.images[0];
        debugger;
      }, function (reject) {
        console.log(reject);
      });
      
  }
})();
