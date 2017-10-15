(function() {
    'use strict';
  
    angular
      .module('woozaSeplag2')
      .factory('planosService', planosService);
  
    /** @ngInject */
    function planosService($log, $http) {

     var  apiHost = "http://private-59658d-celulardireto2017.apiary-mock.com/planos/";     
   //  var urlApiPlanos = 'http://private-59658d-celulardireto2017.apiary-mock.com/planos/';
    
      
  
      
      var service = {
        apiHost: apiHost,
        getPlanos: getPlanos,
        //selectPlanosApi : selectPlanosApi,
        
      };
  
      return service;

 
      
  
      function getPlanos(id) {

          // id ? console.log("foi"):console.log("nao foi"); TODO comutar apis.
        
        var filtroPorIdPlanos = apiHost + id;

        return $http.get(filtroPorIdPlanos)
          .then(getPlanosComplete)
          .catch(getPlanosFailed);
  
        function getPlanosComplete(response) {
          return response.data;
        }
  
        function getPlanosFailed(error) {
          $log.error('XHR falhou para getPlanos.\n' + angular.toJson(error.data, true));
        }
      }
    }
  })();
  