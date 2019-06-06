var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
var friends = ["Jonny boi", "big billy", "Geromison", "howard"]

app.get("/", function(req, res){
    res.render("home");
})
app.get("/friends", function(req, res){
    res.render("friends", {
        friends: friends
    });
})
app.post("/addfriend", function(req, res){
    var newFriend = req.body.newfriend;
    friends.push(newFriend);
    res.redirect("/friends");
})

app.listen(9000, undefined, function(){
    console.log("server has started on port 9000");
});