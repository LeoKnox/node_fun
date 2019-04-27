var http = require("http");
var fs = require("fs");

http.createServer(function(req, res) {

    if (req.method === "GET") {
        res.writeHead(200, {"Content-Type": "text/html"});
        fs.createReadStream("./public/form.html", "UTF-8").pipe(res);
    } else if (req.method === "POST") {
        var body = "";
        
        req.on("data", function(chunk) {
            console.log(chunk);
            body += chunk;
        });

        req.on("end", function() {
            res.write(200, {"Content-Type": "text/html"});

            res.end(`
                <!DOCTYPE html>
                <html>
                    <head>
                        <title>Results</title>
                    </head>
                    <body>
                        <h1> Your results </h2>
                        <p>${body}</p>
                    </body>
                </html>
            `);
        })
    }
}).listen(3000);

console.log("listening on port 3000");