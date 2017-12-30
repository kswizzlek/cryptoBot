var Client = require('node-rest-client').Client;
 
var client = new Client();
 
// direct way 
client.get("https://bitsane.com/api/public/ticker", function (data, response) {
    // parsed response body as js object 
    //console.log(data);
    // raw response 
    //console.log(response);

    for (var k in data) {
        if (data.hasOwnProperty(k)) {
        	console.log(k);
          	console.log(data[k]);
        }
    }



});