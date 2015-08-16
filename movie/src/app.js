// (function (angular) {
//    var app = angular.module("moviecat",[
//        "moviecat.home","moviecat.details","moviecat.movie_list"]);

//    app.config(["$locationProvider",function($locationProvider){
//        $locationProvider.hashPrefix('');
//    }]);

//    app.controller("searchController",["$scope","$window","$routeParams",function($scope,$window,$routeParams){
//        $scope.query = function(){
//            ///v2/movie/search?q={text}
//            $window.location.hash = "#/search?q="+$scope.keyWords;
//        }
//    }]);
// })(angular);

(function (angular) {
    var app = angular.module('movie', ['movie.home', 'movie_details', "movie_list"]);
    //自定义路由前置符号
    //配置没有的服务在这里配置
    app.config(['$locationProvider', function ($locationProvider) {
        $locationProvider.hashPrefix('');
    }]);

    //搜索功能
    app.controller('searchController', ['$scope', '$window', '$routeParams', function ($scope, $window, $routeParams) {
        $scope.query = function () {
            var kw = $scope.keyword;
            $window.location.hash = "#/search?q=" + kw;
        }
    }])
})(angular);