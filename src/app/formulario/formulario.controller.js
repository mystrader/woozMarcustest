(function() {
    'use strict';
  
    angular
      .module('woozaSeplag2')
      .controller('formController', formController);
  
    /** @ngInject */
    function formController(planosService, $state, $stateParams ) {
      var vm = this; 
      vm.listaDadosCliente = [];
      vm.listPlanos = []; 
      activate();
      
        
      function activate() {      
       getPlanos();  
       
      }
       
      //O id aqui é resgatado via localStorage
      function getPlanos() {
      //  var id_plano = $stateParams.id;
        var id_plano_storage =  localStorage.getItem('storage_id_plano');
        vm.listPlanos = planosService.getPlanos(id_plano_storage).then(function(query){
         vm.listPlanos  = query;    
       console.log('Plano Escolhido -->', query)          
        });   
    }

      
        vm.submitForm = function(){

          var Usuario = function(nome, email, nascimento, cpf, telefone) {
            this.nome = nome;
            this.email = email;
            this.nascimento = nascimento;
            this.cpf = cpf;
            this.telefone = telefone;
          }
          
          var listaDadosUsuario = new Usuario(vm.nome, vm.email, vm.nascimento, vm.cpf, vm.telefone) 
          console.table(listaDadosUsuario);
        };
     

     
  


  } 
      
  
    
  })();
  