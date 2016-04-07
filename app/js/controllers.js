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

phonecatControllers.controller('PhoneListController', function ($scope, Phone) {
    $scope.perPage = 5;
    $scope.currentPage = 0;
    $scope.pageCount = 1;

    $scope.phones = Phone.query();
    $scope.phones.$promise.then( function (phones) {
        $scope.pageCount = Math.ceil(phones.length / $scope.perPage);
    });

    $scope.$watch('query', function (query) {
        $scope.$emit('changeTitlePrefix', query);
    });

    $scope.goToPage = function(pageNumber) {
      $scope.currentPage = pageNumber;
    };

    $scope.orderProperty = 'age';
});

phonecatControllers.controller('PhoneDetailController', function($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function (phone) {
        $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function (imageUrl) {
        $scope.mainImageUrl = imageUrl;
    }
});