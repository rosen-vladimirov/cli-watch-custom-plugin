var Plugin = require("nativescript-plugin").Plugin;
var plugin = new Plugin();

describe("greet function", function() {
    it("exists", function() {
        expect(plugin.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(plugin.greet()).toEqual("Hello, NS");
    });
});