(function() {
  'use strict';

  angular
    .module('woozaSeplag2')
    .controller('PlanosController', PlanosController);

  /** @ngInject */
  function PlanosController(planosService, $state, $stateParams) {
    var vm = this; 
    vm.listPlanos = []; 
    vm.listPlataformas = []; 
    vm.nome_plataforma = ""; 
    activate();
      
    function activate() {      
      getPlanos();  
     selecionaNomePlano();
    }

    
    
    //var id_get = localStorage.getItem('nome');

    
    //  if(id === "TBT01"){
    //   vm.nome_plataforma  = Tablet;
    //  }



    
   
    
    function setlocalStorage(id) {
      var storage_id_plano =  localStorage.setItem ('storage_id_plano', id);  
    }

    //Buscar Planos por Id
    function getPlanos() {
      var id_plano = $stateParams.id;
      console.log(id_plano)
      setlocalStorage(id_plano);

      vm.listPlanos = planosService.getPlanos(id_plano).then(function(query){
       vm.listPlanos  = query;              
      });        
    }

   
    function selecionaNomePlano(id){
      
           let id_plan = $stateParams.id; 
           
              switch(id_plan) {
                case "TBT01":
                vm.nome_plataforma = "TABLET";
                    break;
                case "CPT02":
                vm.nome_plataforma = "COMPUTADOR";
                    break;
                case "WF03":
                vm.nome_plataforma = "WIFI";
                    break;
                default:
                vm.nome_plataforma = "PRESENTE!";
                console.log("aviso" , 'verificar api!')
              }
      
          }



  }
})();


  // TODO: reconstruir objeto
    //   var _setList = function (data) {
    //     vm.map = _.map(data.content, function (obj) {
    //         return {
    //            sku: obj.id,
    //             numefranquiaro: obj.dsContrato,
                
    //         }
    //     });
    // };
