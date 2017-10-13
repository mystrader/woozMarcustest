(function() {
    'use strict';
  
    angular
      .module('woozaSeplag2')
      .controller('formController', formController);
  
    /** @ngInject */
    function formController(planosService, $state, $stateParams) {
      var vm = this; 
      vm.listPlanos = []; 
      activate();
        
      function activate() {      
        getPlanos();  
      }
  


      function getPlanos() {
        var id_plano = $stateParams.id;
        vm.listPlanos = planosService.getPlanos(id_plano).then(function(query){
         vm.listPlanos  = query;              
        });   
  
    


        // TODO
        // imprimir form e select api

        
      }
  
    }
  })();
  