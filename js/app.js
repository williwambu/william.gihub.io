/**
 * Created by WILLIAM on 1/26/2015.
 */
var smsApp = angular.module('smsApp',['ngRoute','ngAnimate','chieffancypants.loadingBar']);

smsApp.controller('smsListCtrl',['$scope','$http', function ($scope,$http) {
    $http.get('MOCK_DATA.json').success(function(data){
        $scope.smses = data;
    });

    $scope.toLocalTime = function (utcString){
        return moment(new Date(utcString).toString(),"YYYMMDD").fromNow();
    };
    $scope.read = function (bool_read){
       if(bool_read){
           return 'read'
       }
        return 'unread';
    };
}]);
smsApp.config(['$routeProvider',function($routeProvider){
    $routeProvider
    //route for inbox
        .when('/',{
            templateUrl: 'partials/home.html',
            controller: 'smsListCtrl'
        })
        .when('/inbox',{
            templateUrl:'partials/inbox.html',
            controller:'smsListCtrl'
        }).
        when('/github',{
            templateUrl:'partials/github.html',
            controller:'githubCtrl'
        });

}]);
smsApp.changeStatus = function($http){
    $http.post();
};


smsApp.controller('githubCtrl',['$http','$scope',function($http,$scope){
    $http.get('http://api.github.com/repos/jquery/jquery/contributors').success(
        function(data){
            console.log(data);
            $scope.contributors = data;
        }
    );
}]);