'use strict';
require('dotenv').config();

const      express = require('express'),
              // Help parse incoming POST requests
        bodyParser = require('body-parser'),
              // Library to make HTTP requests
           request = require('request'),
              // Used to generate random User IDs
              uuid = require('uuid'),
              // Abstracted helpers for Optimizely
  optimizelyClient = require('./src/optly_client'),
              // Hardcoded products
              recs = require('./src/product_data');

let app = express(),
    response = "default -- empty";

// Setup port
app.set('port', (process.env.PORT || 5000))

// Process application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

// Process application/json
app.use(bodyParser.json());

// Optimizely initalisation part
let OPTLY_URL = `https://cdn.optimizely.com/json/${process.env.PROJECT_ID}.json`,
    optlyClient;

// Makes async request to instantiate Optimizely SDK
optimizelyClient.initializeClient(OPTLY_URL).then((client)=>{
  console.log('Intialize promise resolve');
  optlyClient = client;
});

// for Facebook verification
app.get('/webhook/', function (req, res) {
  if (req.query['hub.verify_token'] === process.env.VERIFY_TOKEN) {
    res.send(req.query['hub.challenge'])
  }
  res.send('Error, wrong token')
})

// Post endpoint to receive requests from Facebook
app.post('/webhook/', function (req, res) {
  messaging_events = req.body.entry[0].messaging
  for (i = 0; i < messaging_events.length; i++) {
    event = req.body.entry[0].messaging[i]
    sender = event.sender.id
    if (event.message && event.message.text) {
      text = event.message.text
      if (text.toLowerCase().includes('recommend')) { 
        // Generate random user ID
        let userId = uuid();

        // Creates an array of the products from sample products/responses
        let categories = Object.keys(recs.products);
        let randomNumber = Math.floor(Math.random() * categories.length);
        // Select a random category to respond with
        let category = categories[randomNumber];
        // Uses global activate function defined on line 9
        let optimizelyVariation = optlyClient.activate('product_recs', userId);

        // Gets response from sample response json given category + variation
        let responseData = recs.products[category][optimizelyVariation];
        let products = responseData.attachment.payload.elements;

        // Adds random user ID generated to products for tracking if user clicks to buy
        optimizelyVariation === "single_product" ? helpers.addUserId(userId, products) : helpers.addUserIdSingleProd(userId, products);        
        // Sends chat bot response
        optimizelyVariation ? helpers.sendGenericMessage(sender, responseData) : helpers.sendTextMessage(sender, "Hmm our stylists don't have your favorite styles. First go to www.atticandbutton.com to sign up.");
        continue
    }
    if (event.postback) {
      // Fired when user clicks "Buy Now"  
      let payloadResponse = JSON.parse(event.postback.payload);
      // Grabs userID from payload
      let userId = payloadResponse.user;
      // Builds receipt
      let receipt = helpers.buildReceipt(payloadResponse);
      // Track event to Optimizely
      optlyClient.track('purchased', userId, {}, {revenue:receipt.attachment.payload.summary.total_cost * 100});
      // Send receipt
      helpers.sendGenericMessage(sender, receipt);
      continue
      }
    }
  }
  res.sendStatus(204);
});

// Spin up the server
app.listen(app.get('port'), function() {
  console.log('running on port', app.get('port'))
})

let token = process.env.FACEBOOK_TOKEN;

function sendTextMessage(sender, text) {
    messageData = {
        text:text
    }
    request({
        url: 'https://graph.facebook.com/v2.6/me/messages',
        qs: {access_token:token},
        method: 'POST',
        json: {
            recipient: {id:sender},
            message: messageData,
        }
    }, function(error, response, body) {
        if (error) {
            console.log('Error sending messages: ', error)
        } else if (response.body.error) {
            console.log('Error: ', response.body.error)
        }
    })
}

function sendGenericMessage(sender, data) {
    messageData = data;
    request({
        url: 'https://graph.facebook.com/v2.6/me/messages',
        qs: {access_token:token},
        method: 'POST',
        json: {
            recipient: {id:sender},
            message: messageData,
        }
    }, function(error, response, body) {
        if (error) {
            console.log('Error sending messages: ', error)
        } else if (response.body.error) {
            console.log('Error: ', response.body.error)
        }
    })
}
