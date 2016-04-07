/**
 * Created by eugene.karanda on 02.04.2016.
 */

var tutorialApplication = angular.module('tutorialApplication', [
    'ngRoute',
    'phonecatControllers',
    'phonecatFilters',
    'phonecatServices'
]);

tutorialApplication.config(function ($routeProvider) {
    $routeProvider.
        when('/phones', {
            templateUrl: 'partials/phone-list.html',
            controller: 'PhoneListController'
        }).
        when('/phones/:phoneId', {
            templateUrl: 'partials/phone-details.html',
            controller: 'PhoneDetailController'
        }).
        otherwise({
            redirectTo: '/phones'
        });
});