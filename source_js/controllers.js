/* Sample Controller */
app.controller('demoController',['$scope','$http',function($scope,$http){
	// $scope.myFirstVariable = ""
	$scope.myName="wtf";
	$scope.classdata={
		"title":"asdf",
		"names":["a","b","c"]
	};
	// $scope.change = function(){
	// 	$scope.classdata.names.push($scope.inputValue);
	// 	$scope.inputValue="";
	// }

	// $http.get('./data/imdb250.json').success(function(data){
	// 	$scope.oldStaff=data;
	// 	console.log(data);})
	// 	.error(function(err){
	// 		console.log(err);
	// 	});

		// $http.get('/someUrl').
  // success(function(data) {
  // }).error(function(err) {
  // });

}]);
// app.controller('demoTwoController',['$scope','$http','$routeParams',function(){
// 	$scope.myRank=$routeParams.rank;
// }]);
var app = angular.module('movieControllers', []);

app.controller('MovieListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('./data/imdb250.json').success(function(data) {
      $scope.movies = data;
      

      var genres = [];
      var index;
      var genreidx;
      var genrecount=0;
      for (index=0;index<data.length;index++)
      {
      	var flag=0;
      	for(genreidx=0;genreidx<data[index].genre.length;genreidx++)
      	{
      		var tmpgenre = data[index].genre[genreidx];
      		if($.inArray(tmpgenre,genres)<0)
      			{
      				genres.push(tmpgenre);
      				genrecount+=1;
      			}

      	}
      	
      }
    	$scope.genres = genres;
    });
    
    $scope.orderProp = 'title';
    $scope.active_genre = "";
    $scope.change_type_func = function(genre)
    {
    	$scope.active_genre = genre;
    }

    
  }]);

app.filter('genrefilter',function(){

  return function(movies,active_genre) {
    if(movies)
    {
        var out=[];
        var idx;
        for(idx=0;idx<movies.length;idx++)
        {
          var movie_genre = movies[idx].genre;
          if ($.inArray(active_genre,movie_genre)>=0 || active_genre==="")
          {
            out.push(movies[idx]);
          }
        }
        return out;
    }
    // return movies.filter(function(item){ /* your custom conditions */ });
  	// angular.forEach(movies,function(movie)
  	// {
  	// 	var movie_genre = movie.genre;
  	// 	if ($.inArray(active_genre,movie_genre))
  	// 		out.push(movie);
  	// }
  	// )
	}


  });


app.controller('MovieDetailCtrl', ['$scope', '$routeParams','$http',
  function($scope, $routeParams,$http) {

    $http.get('./data/imdb250.json').success(function(data){
      var rank = $routeParams.rank;
      $scope.rank = $routeParams.rank;
      $scope.title = data[rank].title;
      $scope.released = data[rank].released;
      $scope.runtime = data[rank].runtime;
      $scope.plot = data[rank].plot;
      $scope.imdbID = data[rank].imdbID;
      var cur = $scope.rank;
      var prevp = cur-1;
      var nextp = prevp+2;
      if(prevp===0){
        prevp=249;
      }
      if(nextp>=249){
        nextp=1;
      }
      $scope.prevp = prevp;
      $scope.nextp = nextp;
    }
      
      );
      
  
  }]);
// phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams',
//   function($scope, $routeParams) {
//     $scope.phoneId = $routeParams.phoneId;
//   }]);



