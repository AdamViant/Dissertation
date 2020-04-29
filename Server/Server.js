var express = require("express");
var app = express();
var http = require("http");
var MongoClient = require('mongodb').MongoClient;
var url = "";
var port = 9000;

app.use(express.static("Site"));

app.get("/", function(req,res) {
  res.status(200).sendfile("/", {root:"Site"});
});

app.listen(9000, function() {
  console.log("Listening on 9000...");
});
