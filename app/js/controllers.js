/**
 * Created by eugene.karanda on 02.04.2016.
 */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListController', function ($scope, $http) {
    $scope.perPage = 5;
    $scope.currentPage = 0;
    
    $http.get('phones/phones.json').success(function (data) {
        $scope.phones = data;
        $scope.pageCount = Math.ceil(data.length / $scope.perPage);
    });

    $scope.$watch('query', function (newValue) {
        if(newValue) {
            $scope.title = 'Phone Gallery: ' + newValue;
        } else {
            $scope.title = 'Phone Gallery';
        }
    });

    $scope.goToPage = function(pageNumber) {
      $scope.currentPage = pageNumber;
    };

    $scope.orderProperty = 'age';
});

phonecatControllers.controller('PhoneDetailController', function($scope, $routeParams) {
    $scope.phoneId = $routeParams.phoneId;
});