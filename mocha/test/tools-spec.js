var expect = require("chai").expect;
var tools = require("../lib/tools");

describe("Tools", function() {

    describe("printName()", function() {
        it("should print the last name first", function() {
            var results = tools.printName({ first: "Fluffy", last: "Links"});

            expect(results).to.equal("Links, Fluffy");
        });
    });

    describe("loadWiki()", function() {
        it("Load Abraham Lincoln's wikipedia page", function(done) {
            tools.loadWiki({first: "Abraham", last: "Lincoln"}, function(html){
                expect(html).to.be.ok;
                done();
            });
        });
    })
});
