/**
 * Created by azu on 2014/09/28.
 * LICENSE : MIT
 */
"use strict";
var fs = require("fs");
var path = require("path");
var execSync = require("child_process").execSync;
var dateFormat = require("dateformat");
var mustache = require("mustache");
const { createMarkdown } = require("safe-marked");
const convertMarkdown = createMarkdown();

function loadMarkdown(filePath) {
    var content = fs.readFileSync(path.resolve(process.cwd(), filePath), "utf-8")
        .replace("autoscale: true", "");
    return convertMarkdown(content);
}

function getTitleMarkdown(filePath) {
    var getTitle = require("get-md-title");
    var content = fs.readFileSync(path.resolve(process.cwd(), filePath), "utf-8");
    return getTitle(content).text;
}
function getModifiedDate(filePath) {
    // today
    return new Date();
}
// http://stackoverflow.com/questions/2390199/finding-the-date-time-a-file-was-first-added-to-a-git-repository
function getCreateDate(filePath) {
    if (filePath == null) {
        return new Date();
    }
    var log = execSync("git log --diff-filter=A --follow --format=%aD -1 -- '" + filePath + "'");
    if (log == null || Buffer.isBuffer(log)) {
        return new Date();
    }
    return new Date(log);
}
function generator(options) {
    var filePath = path.resolve(process.cwd(), options.markdown);
    var templateObject = {
        title: options.markdown ? getTitleMarkdown(filePath) : path.basename(options["pdfUrl"]),
        "slide-url": options["slideUrl"],
        "base-url": options["baseUrl"],
        "pdf-url": options["pdfUrl"],
        markdown: options.markdown ? loadMarkdown(options.markdown) : "",
        dateModified: dateFormat(getModifiedDate(filePath), "yyyy-mm-dd"),
        datePublished: dateFormat(getCreateDate(filePath), "yyyy-mm-dd")
    };
    var template = fs.readFileSync(__dirname + "/../template/index.html", "utf-8");
    return mustache.to_html(template, templateObject);
}
module.exports = generator;
