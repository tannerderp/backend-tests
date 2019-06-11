var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing");;
});
app.get("/campgrounds", function(req, res){
    var campgrounds = [
        {name: "The Big Hole", image: "https://cdn.images.express.co.uk/img/dynamic/galleries/x701/387899.jpg"},
        {name: "Crap Land", image: "http://cdn.coresites.factorymedia.com/mpora_new/wp-content/uploads/2015/10/Tent.jpg"},
        {name: "Literally just dirt", image: "data:image/jpeg;base64,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"},
    ]
    res.render("campgrounds", {campgrounds: campgrounds});
})

app.listen(9000, undefined, function(){
    console.log("The YelpCamp Server has started on port 9000");
});