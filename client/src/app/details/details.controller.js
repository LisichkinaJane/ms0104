(function() {
  'use strict';

  angular
    .module('client')
    .controller('DetailsController', DetailsController);

  /** @ngInject */
  function DetailsController($http, $scope, detailModel, $stateParams) {
    console.log("Details ctrl init");
        var dt = this;
        dt.url = null;
        dt.show = true;
        dt.hide = true;
      
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
      
        dt.setImage = function(url) {
      dt.url = url;
  }

    dt.changeShow = function(){
        dt.show = !dt.show;
        dt.hide = !dt.hide;
    };
      
      }
})();
