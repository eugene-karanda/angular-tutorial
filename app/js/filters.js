/**
 * Created by eugene.karanda on 02.04.2016.
 */

var phonecatFilters = angular.module('phonecatFilters', []);

phonecatFilters.filter('range', function () {
    return function (input, from, to) {
        if(!Array.isArray(input)) {
            throw new Error('input must have array type');
        }

        if(to === undefined && from == undefined) {
            from = 0;
            to = 0;
        }

        if(to === undefined) {
            to = from;
            from = 0;
        }

        if(from > to) {
            throw new Error('`to` must be equals or less then `from`');
        }

        for (var i = from; i < to; i++) {
            input.push(i);
        }

        return input;
    };
});

phonecatFilters.filter('paginal', function () {
    return function (input, pageNumber, countInPage) {
        if(input === undefined) {
            return input;
        }

        if(!Array.isArray(input)) {
            throw new Error('input must have array type');
        }

        if (input != null) {
            return input.slice(pageNumber * countInPage, (pageNumber + 1) * countInPage);
        }
    }
});
