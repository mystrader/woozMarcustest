(function() {
  'use strict';

  angular
    .module('woozaSeplag2')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
