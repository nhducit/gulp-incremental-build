/**
 * Created by duc on 07/03/2016.
 */
(function(){
    angular
      .module('myApp')
      .config(config);

    /**
     * @ngInject
     */
    function config($logProvider) {
      //disable debugEnabled in production mode to gain more performance
      $logProvider.debugEnabled(true);
    }
  }
)();