/**
 * Created by eugene.karanda on 02.04.2016.
 */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListController', function ($scope, $http) {
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