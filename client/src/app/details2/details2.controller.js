(function() {
  'use strict';

  angular
    .module('client')
    .controller('DetailsController2', DetailsController2);

  /** @ngInject */
  function DetailsController2($http) {
    console.log("Details ctrl init2")
  }
})();
