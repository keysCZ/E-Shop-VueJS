"use strict";

var functions = require("firebase-functions");

var stripe = require('stripe')('sk_test_51INdvGD9cbEc0vgtwRcXN9y3yf83983RW8p4BygyQpzD7tiisd1y8vUcmFG2MSYZLoYdHSbQJWEwLVXirS79z2KO00nIAAA7Da');

var cors = require('cors')({
  origin: true
}); // const jQuery = require('jquery');


var admin = require('firebase-admin');

admin.initializeApp();
exports.CheckoutSession = functions.https.onRequest(function (request, response) {
  cors(request, response, function _callee() {
    var myProducts, productArray, all, results;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            response.set('Access-Control-Allow-Origin', 'https://shop-vue-c6c23.web.app'); // stripe.checkout.sessions.create({
            //   payment_method_types: ['card'],
            //   line_items: [
            //     {
            //       price_data: {
            //         currency: 'usd',
            //         product_data: {
            //           name: 'Stubborn Attachments',
            //           images: ['https://i.imgur.com/EHyR2nP.png'],
            //         },
            //         unit_amount: 2000,
            //       },
            //       quantity: 1,
            //     },
            //   ],
            //   mode: 'payment',
            //   success_url: `success.html`,
            //   cancel_url: `cancel.html`,
            // }, function(err, session) {
            //     response.send(session);
            // });

            myProducts = request.query.products;
            myProducts = Object.entries(JSON.parse(myProducts));
            response.send(myProducts);
            productArray = [];
            myproducts.forEach(function (item) {
              var p = admin.firestore().doc("products/&{item[0]}").get();
              productArray.push(p);
            });
            _context.next = 8;
            return regeneratorRuntime.awrap(Promise.all(productArray));

          case 8:
            all = _context.sent;
            results = [];
            all.forEach(function (item) {
              var data = {};
              data.amount = parseFloat(item.data().price);
              data.currency = "eur";
              data.description = item.data().description;
              data.name = item.data().name;
              myproducts.forEach(function (q) {
                if (item.id == q[0]) {
                  data.quantity = q[1];
                }
              });
              results.push(data);
            });
            stripe.checkout.sessions.create({
              payment_method_types: ['card'],
              line_items: results,
              mode: 'payment',
              success_url: 'https://example.com/success',
              cancel_url: 'https://example.com/cancel'
            }, function (err, session) {
              response.send(session);
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    });
  });
});