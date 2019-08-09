/**
 * Created by azu on 2014/09/28.
 * LICENSE : MIT
 */
"use strict";

var fs = require("fs");
var path = require("path");
var generator = require("./generator");
module.exports = function write(options) {
    var results = generator(options);
    fs.writeFileSync(path.resolve(process.cwd(), options.output), results);
};
