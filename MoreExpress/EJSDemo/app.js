var express = require("express");
var app = express();
app.get("/", function(req, res){
    res.render("home.ejs");
})
app.get("/fallinlovewith/:thing", function(req, res){
    var thing = req.params.thing;
    res.render("love.ejs", {
        thingVar: thing,
    });
})
app.listen(9000, undefined, function(){
    console.log("server has started on port 9000");
});