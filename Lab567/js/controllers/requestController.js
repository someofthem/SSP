var myApp=angular.module('myApp');

myApp.controller('requestController', function($http, $scope){
    $http.get('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=a7845f9c238e4b71bb6d24c6064f8470')
        .success(function(data){
            $scope.result = data.results;
        });
    $scope.artclnmbr;	
});
