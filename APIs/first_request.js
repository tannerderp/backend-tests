var request = require("request");
//yahoo sunset api is apparently gone, so I just found anotha one
console.log("sunset in new york is...")
request("https://api.sunrise-sunset.org/json?lat=40.7128&lng=74.0060", function(error, response, body){ //this should be new york
    if(!error&&response.statusCode == 200){
        var parsedData = JSON.parse(body);
        console.log(parsedData["results"]["sunset"]);
    }
})