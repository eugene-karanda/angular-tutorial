/**
 * Created by eugene.karanda on 02.04.2016.
 */

var tutorialApplication = angular.module('tutorialApplication', []);

tutorialApplication.controller('PhoneListController', function ($scope, $http) {
    $scope.perPage = 5;

    $http.get('phones/phones.json').success(function (data) {
        $scope.phones = data;
    });

    $scope.$watch('query', function (newValue) {
        if(newValue) {
            $scope.title = 'Phone Gallery: ' + newValue;
        } else {
            $scope.title = 'Phone Gallery';
        }
    });
    
    $scope.orderProperty = 'age';
});

tutorialApplication.filter('range', function() {
    return function(input, total) {
        total = parseInt(total);

        for (var i=0; i<total; i++) {
            input.push(i);
        }

        return input;
    };
});