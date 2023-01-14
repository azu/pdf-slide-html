/**
 * Created by azu on 2014/09/28.
 * LICENSE : MIT
 */
"use strict";

const fs = require("fs");
const path = require("path");
const generator = require("./generator");
module.exports = function write(options) {
    var results = generator(options);
    fs.writeFileSync(path.resolve(process.cwd(), options.output), results);
};
