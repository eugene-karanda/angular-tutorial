/**
 * Created by eugene.karanda on 02.04.2016.
 */

describe('Tutorial Application', function() {

    describe('Phone list view', function() {

        beforeEach(function() {
            browser.get('index.html');
        });
        
        var query = element(by.model('query'));
        var phoneNameColumn = element.all(by.repeater('phone in phones').column('phone.name'));

        it('should display the current filter value in the title bar', function() {
            query.clear();
            expect(browser.getTitle()).toMatch('Phone Gallery');

            query.sendKeys('nexus');
            expect(browser.getTitle()).toMatch('Phone Gallery: nexus');
        });

        it('should be possible to control phone order via the drop down select box', function() {
            function getNames() {
                return phoneNameColumn.map(function(element) {
                    return element.getText();
                });
            }

            query.sendKeys('tablet'); //let's narrow the dataset to make the test assertions shorter

            expect(getNames()).toEqual([
                "Motorola XOOM\u2122 with Wi-Fi",
                "MOTOROLA XOOM\u2122"
            ]);

            element(by.model('orderProperty')).element(by.css('option[value="name"]')).click();

            expect(getNames()).toEqual([
                "MOTOROLA XOOM\u2122",
                "Motorola XOOM\u2122 with Wi-Fi"
            ]);
        });
    });
});