var express = require("express");
var app = express();
app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment");
})
app.get("/speak/pig", function(req, res){
    res.send("The pig says oink");
})
app.get("/speak/cow", function(req, res){
    res.send("the cow says mooooooooooooooooooooooooo");
})
app.get("/speak/dog", function(req, res){
    res.send("the dog says woof woof");
})
app.get("/repeat/:word/:amount", function(req, res){
    var word = req.params.word;
    var amount = req.params.amount;
    var say = "";
    for(var i = 0; i<amount; i++){
        say += word + " ";
    }
    res.send(say);
})
app.get("*", function(req, res){
    res.send("Sorry page not found, what are you doing with your life?")
})
app.listen(9000, undefined, function(){
    console.log("server has started on port 9000");
});