module.exports = function( app, Api ) {
  app.get( '/category/:id', ( req, res ) => {
    Api.get(
      'products?category=' + req.params.id,
      function( err, data, response ) {
        res.send( response );
      }
    );
  } );
};
