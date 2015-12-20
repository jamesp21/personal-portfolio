// Create app
var myApp = angular.module('myApp', ['ui.router'])
// Configure app
myApp.config(function($stateProvider) {
	$stateProvider.state('home', { // Landing page
		url:'',
		templateUrl: 'templates/home.html', // HTML fragment
		controller: 'homeController', // Which controller
	})
	// Configure states for "content" and "about"
	$stateProvider.state('projects', { // Landing page
		url:'/projects',
		templateUrl: 'templates/projects.html', // HTML fragment
		controller: 'projectsController', // Which controller
	})
	$stateProvider.state('about', { // Landing page
		url:'/about',
		templateUrl: 'templates/about.html', // HTML fragment
		controller: 'aboutController', // Which controller
	})
})
// Landing page controller: define $scope.number as a number
.controller('homeController', function($scope){
  $scope.url = "https://s-media-cache-ak0.pinimg.com/736x/38/53/d6/3853d6b718da87d96d44d251b396d8a7.jpg";
})

// About page controller: define $scope.about as a string
.controller('aboutController', function($scope){
  $scope.url = "img/me-1.jpg"
})

// Content controller: define $scope.url as an image
.controller('projectsController', function($scope, $http){
	var file = "json/projects.json"
	$http.get(file).success(function(response){
	  data = $scope.rows = response
	})
})
