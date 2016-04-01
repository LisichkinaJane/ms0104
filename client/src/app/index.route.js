(function() {
  'use strict';

  angular
    .module('client')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('details', {
        url: '/details',
        templateUrl: 'app/details/details.view.html',
        controller: 'DetailsController',
        controllerAs: 'details'
      })
      .state('details2', {
        url: '/details2',
        templateUrl: 'app/details2/details2.view.html',
        controller: 'DetailsController2',
        controllerAs: 'details2'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
