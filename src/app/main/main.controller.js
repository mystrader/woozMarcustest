(function() {
  'use strict';

  angular
    .module('woozaSeplag2')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(githubContributor) {
    var vm = this; 
    vm.githubContributes = []; 
    activate();

       
    function activate() {      
      getPlataformas();  
    }


    function getPlataformas() {
      vm.githubContributes = githubContributor.getContributors().then(function(testes){
       vm.githubContributes  = testes;              
      });   
      
    }

  }
})();
