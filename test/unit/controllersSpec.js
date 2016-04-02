/**
 * Created by eugene.karanda on 02.04.2016.
 */

describe('PhoneListController', function () { //TODO try rename to controller spec

    beforeEach(module('tutorialApplication'));

    it('should create "phones" model with 3 phones', inject(function ($controller) {
        var scope = {};
        $controller('phoneListController', {$scope: scope});

        expect(scope.phones.length).toBe(3);
    }));

});