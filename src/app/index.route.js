/**
 * Created by duc on 07/03/2016.
 */
(function(){
    angular.module('myApp')
      .config(routerConfig);

    /**
    * @ngInject
    */
    function routerConfig($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'app/main/main.html',
          controller: 'MainController',
          controllerAs: 'vm'
        });

      $urlRouterProvider.otherwise('/');
    }
  }
)();