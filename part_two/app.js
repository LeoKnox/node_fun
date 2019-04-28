var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var app = express();

var skyTerms = [
    {
        term: "Rip",
        defined: "Something about rip"
    },
    {
        term: "Puck",
        defined: "Ask Shakespeare"
    },
    {
        term: "Chode",
        defined: "Chromatic node"
    }
];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
    console.log(`${req.method} request for '${req.url}' - ${JSON.stringify(req.body)}`);
    next();
});
app.use(express.static("./public"));

app.use(cors());

app.get("/dictionary-api", function(req, res) {
    res.json(skyTerms);
});

app.post("/dictionary-api", function(req, res) {
    skyTerms.push(req.body);
    res.json(skyTerms);
});

app.delete("/dictionary-api/:term", function(req, res) {
    skyTerms = skyTerms.filter(function(definition) {
        return definition.term.toLowerCase() !== req.params.term.toLowerCase();
    });
    res.json(skyTerms);
})

app.listen(3000);

console.log("Listening on porrt 3000");

module.exports = app;