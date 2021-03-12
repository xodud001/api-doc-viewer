const models = require('../../models');

exports.get_api = ( _ , res) => {
    models.api.findAll().then( result => {
        res.render('admin/api.html', {
          apis: result
        });
    });
}

exports.get_api_write = ( _ , res) => {
    res.render( 'admin/write.html');
}

exports.post_api_write = ( req , res ) => {
    res.send(req.body);
}