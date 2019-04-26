var fs = require("fs");

fs.renameSync("./lib/Person.js","./lib/Person2.json");

console.log("Config json file renamed");

fs.rename("./lib/Blue.md", "./Blue.md", function() {
    if (err) {
        console.log(err);
    } else {
        console.log("file moved");
    }
});