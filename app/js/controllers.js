/**
 * Created by eugene.karanda on 02.04.2016.
 */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('TitleController', function ($scope) {
    $scope.setTitlePrefix = function (prefix) {
        if(prefix) {
            $scope.title = 'Phone Gallery: ' + prefix;
        } else {
            $scope.title = 'Phone Gallery';
        }
    };

    $scope.setTitlePrefix('');

    $scope.$on('changeTitlePrefix', function (event, args) {
        $scope.setTitlePrefix(args);
    });
});

phonecatControllers.controller('PhoneListController', function ($scope, $http) {
    $scope.perPage = 5;
    $scope.currentPage = 0;
    
    $http.get('phones/phones.json').success(function (data) {
        $scope.phones = data;
        $scope.pageCount = Math.ceil(data.length / $scope.perPage);
    });

    $scope.$watch('query', function (query) {
        $scope.$emit('changeTitlePrefix', query);
    });

    $scope.goToPage = function(pageNumber) {
      $scope.currentPage = pageNumber;
    };

    $scope.orderProperty = 'age';
});

phonecatControllers.controller('PhoneDetailController', function($scope, $routeParams, $http) {
    $http.get('phones/' + $routeParams.phoneId + '.json').success(function(data) {
        $scope.phone = data;
        $scope.mainImageUrl = data.images[0];
        
        $scope.setImage = function (imageUrl) {
            $scope.mainImageUrl = imageUrl;
        }
    });
});