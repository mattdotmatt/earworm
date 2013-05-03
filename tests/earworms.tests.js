/**
 * User: myoung
 * Date: 03/05/13
 * Time: 13:27
 */

describe("Earworms", function () {
    "use strict";
    it("uses a date range based around the birthday", function() {
        var birthday = new Date(2010, 12, 23);
        var x = EarWorm.getSearchDateRange(birthday);
        expect(x).toBe('hello');
    });
});