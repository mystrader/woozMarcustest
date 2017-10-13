(function() {
  'use strict';

  angular
    .module('woozaSeplag2')
    .factory('githubContributor', githubContributor);

  /** @ngInject */
  function githubContributor($log, $http) {
    var apiHost = 'http://private-59658d-celulardireto2017.apiary-mock.com/plataformas';
    // https://api.github.com/repos/Swiip/generator-gulp-angular
    

    var service = {
      apiHost: apiHost,
      getContributors: getContributors
    };


    

    return service;

    function getContributors() {
     
      return $http.get(apiHost)
        .then(getContributorsComplete)
        .catch(getContributorsFailed);

      function getContributorsComplete(response) {
        return response.data;
      }

      function getContributorsFailed(error) {
        $log.error('XHR Failed for getContributors.\n' + angular.toJson(error.data, true));
      }
    }
  }
})();
