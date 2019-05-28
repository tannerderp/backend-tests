var express = require("express");
var app = express();
app.get("/", function(req, res){
    res.send("Hello Son");
})
app.get("/bye", function(req, res){
    res.send("Screw off");
})
app.get("/dog", function(req, res){
    res.send("Your mom");
})
app.get("/ebola/:anything", function(req, res){
    var thing = req.params.anything;
    res.send("Ebola is bad, and it's related to "+thing);
})
app.get("*", function(req, res){
    res.send("404 your mom not found");
})
app.listen(9000, undefined, function(){
    console.log("server has started on port 9000");
});