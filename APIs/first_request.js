var request = require("request");
request("https://www.tannerderp.tk/games/p5/basketball", function(error, response, body){
    if(error){
        console.log("epic error:");
        console.log(error);
    } else{
        if(response.statusCode == 200){
            //it worked
            console.log(body);
        }
    }
})