/**
 * Created by eugene.karanda on 02.04.2016.
 */

describe('Controllers', function () {

    beforeEach(module('phonecatControllers'));
    
    describe('PhoneListController', function () {
        var scope, controller, $httpBackend;

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

    describe('PhoneDetailController', function() {
        var scope, controller, routeParam = {phoneId: 'nexus'};
        
        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            controller = $controller('PhoneDetailController', {
                $scope: scope,
                $routeParams: routeParam
            });
        }));

        it('route param must be saved in scope', function () {
            expect(scope.phoneId).toBe('nexus');
        });
    });
});