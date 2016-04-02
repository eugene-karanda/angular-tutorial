/**
 * Created by eugene.karanda on 02.04.2016.
 */

var tutorialApplication = angular.module('tutorialApplication', []);

tutorialApplication.controller('phoneListController', function ($scope) {
    $scope.phones = [
        {
            'name': 'Nexus S',
            'snippet': 'Fast just got faster with Nexus S.'
        },
        {
            'name': 'Motorola XOOM™ with Wi-Fi',
            'snippet': 'The Next, Next Generation tablet.'
        },
        {
            'name': 'MOTOROLA XOOM™',
            'snippet': 'The Next, Next Generation tablet.'
        }
    ];
    
    $scope.filtered = '';
});