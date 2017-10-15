(function() {
  'use strict';

  angular
    .module('woozaSeplag2')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(githubContributor) {
  
    //apagando o localStorage do id de plano da fase2
    localStorage.clear();

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
