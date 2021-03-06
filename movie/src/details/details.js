(function(angular){
    //1.创建1个模块.
    var app = angular.module("movie_details",["ngRoute","cross"]);

    //2.配置路由.
    app.config(["$routeProvider",function($routeProvider){
        $routeProvider.when("/details/:id",{
            templateUrl:"./details/details.html",
            controller:"detailsCtrl"
        })
    }]);

    //3.创建控制器.
    app.controller("detailsCtrl",[
        "$scope",
        "$routeParams",
        "cross_jsonp",
        function($scope,$routeParams,cross_jsonp){
        
        $scope.isShow = true;
        //1.得到传递过来的电影的id
        var id = $routeParams.id;
        //2.发请求 拿数据 绑定数据.
        cross_jsonp.crossJsonp({
            url:"http://api.douban.com/v2/movie/subject/"+id,
            params:{},
            callback:function(data){
                $scope.movie = data;
                $scope.isShow = false;
                $scope.$apply();
            }
        });
    }]);

})(angular);