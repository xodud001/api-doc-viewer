const express = require('express');
const admin = require('./routes/admin');
const nunjucks = require('nunjucks');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

nunjucks.configure('template', {
    autoescape : true,
    express : app
});

//미들웨어 셋팅
app.use(logger('dev'));
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( {
    extended : false
} ));

app.use('/uploads', express.static(__dirname + '/uploads') );

app.use( (req, res, next) =>{
    app.locals.isLogin = true;
    next();
});

app.use('/admin', admin);

app.use( (err, req, res, next )=>{
    console.error(err.stack);
    res.status(400).render('common/404.html'); 
});

app.get('/', (req, res) =>{
    res.send('hello express');
});

app.get('/hi', (req, res) =>{
    res.send('hi express with nodemon');
});


app.listen(port, () =>{
    console.log('Express listening on port ', port);
});