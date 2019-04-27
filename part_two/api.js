var http = require("http");
var data = require("./data/inventory");

http.createServer(function(req, res) {
    if (req.url === "/") {

    res.writeHead(200, {"Content-Type": "text/json"});
    res.end(JSON.stringify(data));

    } else if (req.url === "/done") {
        listIsDone(res);
    } else if (req.url === "/quit") {
        listQuit(res);
    } else {
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.end("No data here");
    }
}).listen(3000);

console.log("listening on 3000");

function listIsDone(res) {
    var isDone = data.filter(function(item){
        return item.tail === "done";
    })

    res.end(JSON.stringify(isDone));
}

function listQuit(res) {
    var isQuit = data.filter(function(item){
        return item.tail === "quit";
    })

    res.end(JSON.stringify(isQuit));
}