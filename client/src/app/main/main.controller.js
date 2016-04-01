(function() {
  'use strict';

  angular
    .module('client')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($http, $scope, mainModel) {
    var vm = this;
      
    vm.items = [];
      vm.test = 'sadasdas';
    mainModel.getItems()
      .then(function (data) {

        vm.items = data;
      }, function (reject) {
        console.log(reject);
      });

  }


})();
