"use strict";

var functions = require("firebase-functions");

var stripe = require('stripe')('sk_test_51INdvGD9cbEc0vgtwRcXN9y3yf83983RW8p4BygyQpzD7tiisd1y8vUcmFG2MSYZLoYdHSbQJWEwLVXirS79z2KO00nIAAA7Da');

var cors = require('cors')({
  origin: true
});

var admin = require('firebase-admin'); // const jQuery = require('jquery');


admin.initializeApp();
exports.CheckoutSession = functions.https.onRequest(function (request, response) {
  cors(request, response, function () {
    response.set('Access-Control-Allow-Origin', 'https://shop-vue-c6c23.web.app');
    stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Stubborn Attachments',
            images: ['https://i.imgur.com/EHyR2nP.png']
          },
          unit_amount: 2000
        },
        quantity: 1
      }],
      mode: 'payment',
      success_url: "success.html",
      cancel_url: "cancel.html"
    }, function (err, session) {
      response.send(session);
    });
    var myProducts = request.query.products;
    myProducts = Object.entries(JSON.parse(myProducts));
    response.send(myProducts); // const productArray = [];
    // myproducts.forEach(item => {
    //     const p = admin.firestore().doc(`products/&{item[0]}`).get();
    //     productArray.push(p);
    // });
    // const all = await Promise.all(productArray);
    // const results = [];
    // all.forEach(item => {
    //   const data = {};
    //   data.amount = parseFloat(item.data().price);
    //   data.currency = "eur";
    //   data.description = item.data().description;
    //   data.name = item.data().name;
    //   myproducts.forEach(q => {
    //     if(item.id == q[0]){
    //       data.quantity = q[1];
    //     }
    //   });
    //   results.push(data);
    // });
    // stripe.checkout.sessions.create({
    // payment_method_types: ['card'],
    // line_items: results,
    // mode: 'payment',
    // success_url: 'https://example.com/success',
    // cancel_url: 'https://example.com/cancel',
    //   }, function(err, session) {
    //     response.send(session);
    //   });
  });
});