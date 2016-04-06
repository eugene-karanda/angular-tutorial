/**
 * Created by eugene.karanda on 05.04.2016.
 */

describe('Filters', function () {
    beforeEach(module('phonecatFilters'));

    describe('range', function () {
        it('should create array of range', inject(function (rangeFilter) {
            expect(rangeFilter([], 1)).toEqual([0]);
            expect(rangeFilter([], 5)).toEqual([0, 1, 2, 3, 4]);
            expect(rangeFilter([], 5, 8)).toEqual([5, 6, 7]);
            expect(rangeFilter([], -4, 0)).toEqual([-4, -3, -2, -1]);
        }));

        it('should create empty array', inject(function (rangeFilter) {
            expect(rangeFilter([])).toEqual([]);
            expect(rangeFilter([], 0)).toEqual([]);
            expect(rangeFilter([], 1, 1)).toEqual([]);
            expect(rangeFilter([], 5, 5)).toEqual([]);
        }));

        it('`to` should be equals or less then `from`', inject(function (rangeFilter) {
            expect(function() {
                rangeFilter([], -5);
            }).toThrow(new Error('`to` must be equals or less then `from`'));

            expect(function() {
                rangeFilter([], 0, -4);
            }).toThrow(new Error('`to` must be equals or less then `from`'));
        }));

        it('input must have array type', inject(function (rangeFilter) {
            expect(function() {
                rangeFilter();
            }).toThrow(new Error('input must have array type'));

            expect(function() {
                rangeFilter('some string');
            }).toThrow(new Error('input must have array type'));
        }));
    });

    describe('paginal', function () {
        it('should return sub array', inject(function (paginalFilter) {
            expect(paginalFilter([0, 1, 2, 3, 4, 5], 1, 2)).toEqual([2, 3])
        }))
    });

    describe('checkmark', function() {

        it('should convert boolean values to unicode checkmark or cross',
            inject(function(checkmarkFilter) {
                expect(checkmarkFilter(true)).toBe('\u2713');
                expect(checkmarkFilter(false)).toBe('\u2718');
            }));
    });
});