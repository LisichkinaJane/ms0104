(function() {
  'use strict';

  angular
    .module('client')
    .directive('comments', Directive);

  /** @ngInject */
  function Directive($http) {
    return {
      restrict: 'E',
      templateUrl: 'app/components/comments/comments.view.html',
      scope:{
          comment:"="
      },
        controller: linkFunction
    }
  }

  function linkFunction ($scope) {
      debugger;
    console.log('Navbar init')
  }
})();