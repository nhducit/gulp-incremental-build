/**
 * Created by duc on 07/03/2016.
 */
(function(){
    angular
      .module('myApp')
      .run(run);
    /**
     * @ngInject
     */
    function run($log) {
      $log.debug('angular runBlock');
    }
  }
)();