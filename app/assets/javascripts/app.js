var receta = angular.module('receta', ['ngRoute', 'templates']);


receta.config(function ($routeProvider) {

  $routeProvider

      .when('/', {
        templateUrl: 'index.html',
        controller: 'RecipesController'
      })

      // .when('/recipes/new',
      //   templateUrl: "new.html"
      //   controller: 'SomeOtherController'
      // )

});



receta.controller('RecipesController', ['$scope', 'templates' function($scope, templates){


}])

