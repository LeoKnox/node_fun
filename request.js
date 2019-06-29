const https = require("https");
const fs = require("fs");

const request = https.request("https://en.wikipedia.org/wiki/Charlie_Brown", res => {
    let download = fs.createWriteStream("./Charlie_brown.html");
    res.pipe(download);

    res.on("end", () => {
        console.log("Response Finished: Wiki page downloaded");
    });
});

request.end();