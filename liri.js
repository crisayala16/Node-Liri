var fs = require("fs");
var Twitter = require("twitter");
var command = process.argv[2];
//reading keys.js file in order to use data
fs.readFile("keys.js", "utf-8", function(error, data) {
    //spliting the data in order to get the twitterKeys section 
    var keys = data.split("=");
    var twitterKeys = keys[1];
    //spliting the twitterKeys seciton in order to seperate the keys seperatly
    var splitKeys = twitterKeys.split("'");
    //asigning the keys into variables
    var consumerKey = splitKeys[1];
    var consumerSecret = splitKeys[3];
    var accessTokenKey = splitKeys[5];
    var accessTokenSecret = splitKeys[7];
    //Twitter package stuff
    var client = new Twitter({
        consumer_key: consumerKey,
        consumer_secret: consumerSecret,
        access_token_key: accessTokenKey,
        access_token_secret: accessTokenSecret
    });
    //Setting the parameters
    var params = {
        screen_name: 'CrisAP28',
        count: "20"
    };
    //Actual api request to retrieve the tweets
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (command === "my-tweets") {
            for (var i = 0; i < tweets.length; i++) {
                console.log(i + 1 + ": " + tweets[i].text);
            }
        }
    })

});