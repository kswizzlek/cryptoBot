var Client = require('node-rest-client').Client;
 
var client = new Client();


var exchanges = {
    bitsane: {
        link: "https://bitsane.com",
        getTicker: "/api/public/ticker",
    },
    bittrex: {
        link: "https://bittrex.com/api/v1.1/public/getmarkets",
        getTicker: "",
    },
    gdax: {
        link: "https://api.gdax.com",
        getTicker: "",
    }
}
 
function getPrice(sellCurrency, buyCurrency, exchange){
    console.log("getPrice");

    client.get("https://bittrex.com/api/v1.1/public/getticker", function (data, response) {

    });

};

getPrice("", "", "bitsane");




// direct way 
client.get("https://bitsane.com/api/public/ticker", function (data, response) {
    // parsed response body as js object 
   // console.log(data);
    // raw response 
    //console.log(response);

    var currencies = {
        "USD" : 200,
        "BTC" : 0,
        "ETH" : 0,
        "XRP" : 0,
        "LTC" : 0,
        "DASH": 0,
        "BCH" : 0,
    }

    var conversionRates = {}

    //Finds all the different currency combinations that are possible XPP->USD, ETH->BTC, BTC->ETH, ect...
    for (var key in currencies){
        console.log(key)

        for (var k in currencies){

            if(k != key){
                conversionRates[key + "_" + k] = 0;
                console.log (key + "_" + k)
                if(data[key + "_" + k]){
                    console.log(data[key + "_" + k])
                    conversionRates[key + "_" + k] = {
                        "last": data[key + "_" + k].last,
                        "lowestAsk": data[key + "_" + k].lowestAsk,
                        "highestBid": data[key + "_" + k].highestBid,
                    }
                }else{
                    console.log (k + "_" + key)
                    console.log(data[k + "_" + key])
                }

            }
        }
    }


    for (var key in conversionRates){
        console.log(key)
        console.log(conversionRates[key])
    }

    var usd = 200;
    var btc = 0;
    var eth = 0;
    var xrp = 0;

   // var currencies = {"USD", "BTC", "ETH"};

    var routes = {}

    btc = usd / data["BTC_USD"].last

    console.log("USD -> BTC amt: " + btc)

    eth = btc / data["ETH_BTC"].last

    console.log("USD -> BTC -> ETH amt: " + eth)

    eth = usd / data["ETH_USD"].last

    console.log("USD -> ETH amt: " + eth)

    btc = eth * data["ETH_BTC"].last

    console.log("USD -> ETH -> BTC: " + btc)



    for (var k in data) {
        if (data.hasOwnProperty(k)) {
        	//console.log(k);
          	//console.log(data[k]);
          //	console.log(data[k].low24hr)
        }
    }
});




