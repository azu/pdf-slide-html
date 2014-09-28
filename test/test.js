"use strict";
var assert = require("assert");
var fs = require("fs");
var generator = require("../lib/generator");
describe("generate", function () {
    it("should generate", function () {
        var result = generator({
            title: "title",
            "baseUrl": "http://azu.github.io/slide-pdf.js/",
            "pdfUrl": "http://azu.github.io/slide/DOMQuery/sourcemap.pdf",
            markdown: __dirname + "/fixtures/test.md"
        });
        var expected = fs.readFileSync(__dirname + "/fixtures/results.html", "utf-8");
        assert.equal(result, expected);
    });
});
