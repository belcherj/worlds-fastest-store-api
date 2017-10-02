const categories = require( './categories' );
const category = require( './category' );

module.exports = function( app, Api ) {
  category( app, Api );
  categories( app, Api );
};
