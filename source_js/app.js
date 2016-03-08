
var app = angular.module('mp3',
	['ngRoute',
	'movieControllers',
	]);

app.config(['$routeProvider','$controllerProvider',
	function($routeProvider,$controllerProvider){
	app.registerCtrl = $controllerProvider.register;
	$routeProvider.
	when('/list',{
		templateUrl: 'partials/list.html',
		controller: 'MovieListCtrl'
	}).
	when('/list/:rank', {
        templateUrl: 'partials/details.html',
        controller: 'MovieDetailCtrl'
      }).
	when('/gallery',{
		templateUrl: 'partials/gallery.html',
		controller: 'MovieListCtrl'
	}).

	otherwise({
		redirectTo:'/list'
	})
}]);



// var movieControllers = angular.module('phonecatControllers', []);

// phonecatControllers.controller('PhoneListCtrl', ['$scope', '$http',
//   function ($scope, $http) {
//     $http.get('phones/phones.json').success(function(data) {
//       $scope.phones = data;
//     });

//     $scope.orderProp = 'age';
//   }]);

// phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams',
//   function($scope, $routeParams) {
//     $scope.phoneId = $routeParams.phoneId;
//   }]);

// app.config(function ($routeProvider) {
// 	$routeProvider
// 	.when(
// 		'/gallery',{
// 			templateUrl:'partials/gallery.html',
// 			controller:'demoController'
// 		}).otherwise({
// 			redirectTo:'/'
// 		})
// })




