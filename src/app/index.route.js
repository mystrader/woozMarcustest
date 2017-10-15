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
      })
      .state('formulario', {
        url: '/plataforma/planos/formulario/:id',
        templateUrl: 'app/formulario/formulario.html',
        controller: 'formController',
        controllerAs: 'main'
      });
    $urlRouterProvider.otherwise('/');
  }

})();
