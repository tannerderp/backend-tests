var express = require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.get("/", function(req, res){
    res.render("home");
})
app.get("/fallinlovewith/:thing", function(req, res){
    var thing = req.params.thing;
    res.render("love", {
        thingVar: thing,
    });
})
app.get("/posts", function(req, res){
    var posts = [
        {title: "post 1", author: "Dingus"},
        {title: "I'm screwed", author: "Geromison"},
        {title: "Anyone selling memes", author: "johny boy"},
    ];
    res.render("posts", {
        posts: posts,
    });
})
app.listen(9000, undefined, function(){
    console.log("server has started on port 9000");
});