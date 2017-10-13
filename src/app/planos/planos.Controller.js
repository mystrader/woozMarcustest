(function() {
  'use strict';

  angular
    .module('woozaSeplag2')
    .controller('PlanosController', PlanosController);

  /** @ngInject */
  function PlanosController(planosService, $state, $stateParams) {
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


    // TODO: reconstruir objeto
    //   var _setList = function (data) {
    //     vm.map = _.map(data.content, function (obj) {
    //         return {
    //            sku: obj.id,
    //             numefranquiaro: obj.dsContrato,
                
    //         }
    //     });
    // };

      
    }

  }
})();
