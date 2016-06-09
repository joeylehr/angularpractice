var receta = angular.module('receta', ['ngRoute']);


receta.config(function ($routeProvider) {

  $routeProvider

      .when('/',
        templateUrl: "index.html"
        controller: 'SomeController'
      )

      .when('/recipes/new',
        templateUrl: "new.html"
        controller: 'SomeOtherController'
      )

});
