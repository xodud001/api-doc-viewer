exports.get_api = ( _ , res) => {
    res.render( 'admin/api.html' , 
        { message : "hello" } // message 란 변수를 템플릿으로 내보낸다.
    );
}

exports.get_api_write = ( _ , res) => {
    res.render( 'admin/write.html');
}

exports.post_api_write = ( req , res ) => {
    res.send(req.body);
}