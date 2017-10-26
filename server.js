const apicache = require('apicache');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const keys = require('./keys');
const WooCommerceAPI = require( 'woocommerce-api' );

const app = express();
const port = 8080;

const Api = new WooCommerceAPI( {
  url: 'https://jonathan-belcher.com',
  consumerKey: keys.consumerKey,
  consumerSecret: keys.consumerSecret,
  wpAPI: true,
  version: 'wc/v2'
} );

app.use( cors() );

let cache = apicache.middleware;
app.use( cache('1 day') );

require( './api/routes' )( app, Api );

const server = app.listen( port, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log('Example app listening at http://' + host + ':' + port);
});

app.use( function( req, res, next ) {
  res.header( 'Access-Control-Allow-Origin', 'https://worlds-fastest-store.appspot.com' );
  res.header( 'Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept' );
  next();
} );
