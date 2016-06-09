receta = angular.module('receta',[])

app.config([ '$routeProvider', ($routeProvider)
    $routeProvider
      .when('/',
        templateUrl: "index.html"
        controller: 'SomeController'
      )
      .when('/recipes/new',
        templateUrl: "new.html"
        controller: 'SomeOtherController'
      )
])