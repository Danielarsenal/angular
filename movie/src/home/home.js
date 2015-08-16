
(function(angular){
    var app = angular.module('movie.home',['ngRoute']);
    app.config(['$routeProvider',function($routeProvider){
        $routeProvider.when('/home',{
            templateUrl:'./home/home.html',
            controller:'homeController'
        }).when('/',{
            redirectTo:'/home'
        })
    }]);
    app.controller("homeController",["$scope",function($scope){

    }]);
})(angular);