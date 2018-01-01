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


    //list of all possiple currencies
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

    //Finds all the different currency conversions that are possible XPP->USD, ETH->BTC, BTC->ETH, ect...
    //Then calculates the conversion rates
    for (var key in currencies){
        console.log(key)

        for (var k in currencies){

            if(k != key){
                conversionRates[key + "_" + k] = 0;
                console.log (key + "_" + k)
                //check to see if the conversion rate from the API is accurate or needs to be reversed
                if(data[key + "_" + k]){
                    console.log(data[key + "_" + k])
                    conversionRates[key + "_" + k] = {
                        "last": data[key + "_" + k].last,
                        "lowestAsk": data[key + "_" + k].lowestAsk,
                        "highestBid": data[key + "_" + k].highestBid,
                    }
                }else{
                    //reverse the conversion rates before entering them into the array 
                    conversionRates[key + "_" + k] = {
                        "last": (1 / data[k + "_" + key].last),
                        "lowestAsk": (1 / data[k + "_" + key].lowestAsk),
                        "highestBid": (1 / data[k + "_" + key].highestBid),
                    }
                    console.log (k + "_" + key)
                    console.log(data[k + "_" + key])
                }

            }
        }
    }

    //create a temporary table of the conversion rates
    var tempConversionRates = conversionRates

    for (var key in conversionRates){
        console.log(key)
        //if(key.includes("USD_")){
            console.log(conversionRates[key])
            //for 

        //}


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




