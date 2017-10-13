(function() {
  'use strict';

  angular
    .module('woozaSeplag2')
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
      .state('planos', {
        url: '/plataforma/planos/:id',
        templateUrl: 'app/planos/planos.html',
        controller: 'PlanosController',
        controllerAs: 'main'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
