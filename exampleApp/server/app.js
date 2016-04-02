'use strict';

//Modules
let express = require('express');
let app = express();
/*Middleware - for parsing message bodies */
let bodyParser = require('body-parser');
/*Middleware - to compress response bodies. Will not compress cache controlled headers*/
let compression = require('compression');
/*Middleware - to handle Cross-origin-resource-sharing. Handles the protocol for you*/
let cors = require('cors');
/*Middleware - handles favicon distribution */
let favicon = require('serve-favicon');
let logger = require('morgan');


//Environment
let port = process.env.PORT || 7100;
let environment = process.env.NODE_ENV;


app.use(bodyParser.urlencoded({extended: true}));   // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json());                         // for parsing application/json
app.use(compression());                             // Compress response data with gzip when supported by browser
app.use(favicon(`${__dirname}/favicon.ico`));
app.use(cors());
app.use(logger('dev'));

console.log('Starting up the server ...');
console.log(`PORT=${port}`);
console.log(`NODE_ENV=${environment}`);


app.get('/ping', function(req, res, next) {
    console.log(req.body);
    res.send('pong');
});


app.listen(port, function(){
    console.log(`Express server listening on port ${port}`);
    console.log(`env = ${app.get('env')}
        \n__dirname = ${__dirname}
        \nprocess.cwd = ${process.cwd()}`);

});
