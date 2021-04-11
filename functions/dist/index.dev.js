"use strict";

var functions = require("firebase-functions");

var stripe = require('stripe')('sk_test_51INdvGD9cbEc0vgtwRcXN9y3yf83983RW8p4BygyQpzD7tiisd1y8vUcmFG2MSYZLoYdHSbQJWEwLVXirS79z2KO00nIAAA7Da');

var cors = require('cors')({
  origin: true
}); // // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


exports.CheckoutSession = functions.https.onRequest(function (request, response) {
  cors(request, response, function _callee() {
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            stripe.checkout.sessions.create({
              payment_method_types: ['card'],
              line_items: [{
                price_data: {
                  currency: 'usd',
                  product_data: {
                    name: 'T-shirt'
                  },
                  unit_amount: 2000
                },
                quantity: 1
              }],
              mode: 'payment',
              success_url: 'https://example.com/success',
              cancel_url: 'https://example.com/cancel'
            }, function (err, session) {
              response.send(session);
            });

          case 1:
          case "end":
            return _context.stop();
        }
      }
    });
  });
});