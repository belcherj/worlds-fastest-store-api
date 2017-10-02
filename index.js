const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const keys = require('./keys');
const WooCommerceAPI = require( 'woocommerce-api' );

const app = express();
const port = 3020;

const Api = new WooCommerceAPI( {
  // url: 'https://worldsfasteststore.dev',
  // verifySsl: false,
  url: 'https://worldsfasteststore.mystagingwebsite.com',
  consumerKey: keys.consumerKey,
  consumerSecret: keys.consumerSecret,
  wpAPI: true,
  version: 'wc/v2'
} );

app.use( cors() );

require( './api/routes' )( app, Api );

app.listen( port, () => {
  console.log('We are live on ' + port);
});

app.use( function( req, res, next ) {
  res.header( 'Access-Control-Allow-Origin', 'http://127.0.0.1:8081' );
  res.header( 'Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept' );
  next();
} );
