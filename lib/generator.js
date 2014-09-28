/**
 * Created by azu on 2014/09/28.
 * LICENSE : MIT
 */
"use strict";
var fs = require("fs");
var path = require("path");
var mustache = require('mustache');

function loadMarkdown(filePath) {
    var content = fs.readFileSync(path.resolve(process.cwd(), filePath), "utf-8");
    return require('marked')(content);
}
function generator(options) {
    var templateObject = {
        title: "title",
        "base-url": options["base-url"],
        "pdf-url": options["pdf-url"],
        markdown: options.markdown ? loadMarkdown(options.markdown) : ""
    };
    var template = fs.readFileSync(__dirname + "/../template/index.html", "utf-8");
    return mustache.to_html(template, templateObject);
}
module.exports = generator;