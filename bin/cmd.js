#!/usr/bin/env node

var cmd = require("../package.json").name;
var optionator = require('optionator')({
    prepend: 'Usage:' + cmd + ' [options]',
    append: 'Version ' + require("../package.json").version,
    options: [
        {
            option: 'help',
            alias: 'h',
            type: 'Boolean',
            description: 'displays help'
        },
        {
            option: 'base-url',
            type: 'String',
            description: 'slide base-url',
            example: cmd + ' --base-url http://azu.github.io/slide-pdf.js/'
        },
        {
            option: 'pdf-url',
            type: 'String',
            description: 'pdf file path',
            example: cmd + ' --pdf http://azu.github.io/slide/DOMQuery/sourcemap.pdf',
            required: true
        },
        {
            option: 'markdown',
            type: 'String',
            description: 'markdown file path',
            example: cmd + ' --markdown path/to/markdown.md'
        }, {
            option: 'output',
            alias: 'o',
            type: 'String',
            description: 'output file path',
            example: cmd + ' --output index.html',
            required: true
        }
    ]
});
var options = optionator.parse(process.argv);
if (options.help) {
    console.log(optionator.generateHelp());
} else {
    require("../lib/writer")(options)
}