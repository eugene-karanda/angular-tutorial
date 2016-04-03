/**
 * Created by eugene.karanda on 02.04.2016.
 */

describe('Controllers', function () {

    describe('PhoneListController', function () {
        var scope;
        var controller;

        beforeEach(module('tutorialApplication'));

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            controller = $controller('PhoneListController', {$scope: scope});
        }));

        it('should create "phones" model with 3 phones', function () {
            expect(scope.phones.length).toBe(3);
        });

        it('should set the default value of orderProp model', function() {
            expect(scope.orderProperty).toBe('age');
        });
    });
});