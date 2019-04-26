var fs = require("fs");

try {
    fs.unlinkSync("./Blue.md");
} catch(err) {
    console.log(err);
}