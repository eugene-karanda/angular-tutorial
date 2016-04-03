/**
 * Created by eugene.karanda on 02.04.2016.
 */

describe('PhoneListController', function () {

    beforeEach(module('tutorialApplication'));

    it('should create "phones" model with 3 phones', inject(function ($rootScope, $controller) {
        var scope = $rootScope.$new();
        $controller('PhoneListController', {$scope: scope});

        expect(scope.phones.length).toBe(3);
    }));

});