'use strict';

//Modules
let express = require('express');
let app = express();

//Environment
var port = process.env.PORT || 7100;
var environment = process.env.NODE_ENV;


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
