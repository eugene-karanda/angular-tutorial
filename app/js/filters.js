/**
 * Created by eugene.karanda on 02.04.2016.
 */

var phonecatFilters = angular.module('phonecatFilters', []);

//TODO arguments checks
//TODO tests

phonecatFilters.filter('range', function() {
    return function(input, total) {
        total = parseInt(total);

        for (var i=0; i<total; i++) {
            input.push(i);
        }

        return input;
    };
});

phonecatFilters.filter('paginal', function () {
   return function (input, pageNumber, countInPage) {
       if(input != null) {
           return input.slice(pageNumber * countInPage, (pageNumber + 1) * countInPage);
       }
   }
});
