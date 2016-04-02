'use strict';
let path = require('path');
let express = require('express');
/*Middleware - for parsing message bodies */
let bodyParser = require('body-parser');
/*Middleware - to compress response bodies. Will not compress cache controlled headers*/
let compression = require('compression');
/*Middleware - to handle Cross-origin-resource-sharing. Handles the protocol for you*/
let cors = require('cors');
/*Middleware - handles favicon distribution */
let favicon = require('serve-favicon');
let logger = require('morgan');
let app = express();

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

//Test route
app.get('/ping', function(req, res, next) {
    console.log(req.body);
    res.send('pong');
});

//API Route
let routes = require('./routes/index')(app);

//Client Application Route
switch (environment){
    case 'production':
        // console.log('** PRODUCTION ON AZURE **');
        // console.log('serving from ' + './build/');
        // process.chdir('./../../');
        // app.use('/', express.static('./build/'));
        break;
    case 'stage':
    case 'build':
        console.log('** BUILD **');
        console.log('serving from ' + './build/');
        app.use('/', express.static('./build/'));
        break;
    default:
        console.log('** DEV **');
        console.log('serving from ./src/client/ and ./');
        app.use('/', express.static(path.join(__dirname, '../client/')));
        break;
}


app.listen(port, function(){
    console.log(`Express server listening on port ${port}`);
    console.log(`env = ${app.get('env')}
        \n__dirname = ${__dirname}
        \nprocess.cwd = ${process.cwd()}`);

});
