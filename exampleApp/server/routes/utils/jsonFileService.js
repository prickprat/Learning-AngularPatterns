module.exports = function (){
    'use strict';

    let service = {
        getJsonFromFile: getJsonFromFile,
    };
    return service;

    function getJsonFromFile(filePath){
        let fs = require('fs');

        let fullFilePath = `${__dirname}/${filePath}`;

        let jsonFile = fs.readFileSync(fullFilePath, 'utf8')
        return JSON.parse(jsonFile);
    }

};