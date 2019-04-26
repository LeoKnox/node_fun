var fs = require("fs");

var md = `
    Sample Markdown Title
    +++++++++++++++

    Sample subtitle

    *point
    *ponit
    *popint

`;

fs.writeFile("sample.md", md.trim(), function() {
    console.log("File Created");
})