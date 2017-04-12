var fs = require("fs");
var Twitter = require("twitter");
var command = process.argv[2];
fs.readFile("keys.js", "utf-8", function(error, data){
	var keys = data.split("=");
	var twitterKeys = keys[1];
	splitKeys = twitterKeys.split("'");
	var consumerKey = splitKeys[1];
	var consumerSecret = splitKeys[3];
	var accessTokenKey = splitKeys[5];
	var accessTokenSecret = splitKeys[7];
	var client = new Twitter({
		consumer_key: consumerKey,
  		consumer_secret: consumerSecret,
  		access_token_key: accessTokenKey,
  		access_token_secret: accessTokenSecret
	});
	var params = {
		screen_name: 'CrisAP28',
		count: "20"
	};
	client.get('statuses/user_timeline', params, function(error, tweets, response){
		if(command === "my-tweets"){
			for(var i = 0; i < tweets.length; i++){
				console.log(i + 1 + ": " + tweets[i].text);
			}
		}
	})

});
 