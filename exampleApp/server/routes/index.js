module.exports = function(app) {
    'use strict';

    let jsonFileService = require('./utils/jsonFileService.js')();

    app.get('/api/maa', getMaa);

    function getMaa(req, res, next){
        let json = jsonFileService.getJsonFromFile('/../../data/maa.json');
        //Remove (MAA) tag from name of characters
        json[0].data.results.forEach(function (character){
            let dirtyDataPos = character.name.indexOf('MAA)');
            character.name = character.name.substr(0, dirtyDataPos - 1);
        });
        res.send(json);
    }
};