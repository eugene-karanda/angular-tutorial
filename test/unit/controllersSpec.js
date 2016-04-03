/**
 * Created by eugene.karanda on 02.04.2016.
 */

describe('Controllers', function () {

    describe('PhoneListController', function () {
        var scope, controller, $httpBackend;

        beforeEach(module('tutorialApplication'));

        beforeEach(inject(function (_$httpBackend_, $rootScope, $controller) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('phones/phones.json').
                respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);

            scope = $rootScope.$new();
            controller = $controller('PhoneListController', {$scope: scope});
        }));

        it('should create "phones" model with 2 phones fetched from xhr', function () {
            expect(scope.phones).toBeUndefined();
            $httpBackend.flush();

            expect(scope.phones).toEqual([{name: 'Nexus S'},
                {name: 'Motorola DROID'}]);
        });

        it('should set the default value of orderProp model', function() {
            expect(scope.orderProperty).toBe('age');
        });
    });
});