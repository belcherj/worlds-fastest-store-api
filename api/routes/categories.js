module.exports = function( app, Api ) {
  app.get( '/categories', ( req, res ) => {
    Api.get( 'products/categories', function( err, data, response ) {
      const categories = JSON.parse( response ).map( function( { name, slug, image, id } ) {
        return { name: slug, title: name, image, id }
      } );
      res.send( categories );
    });
  } );
};
