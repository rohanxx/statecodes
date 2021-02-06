const stateCodes = require('./stateCodes.json') ;

function statecode(stateName) {
    var result = stateCodes.filter(function (data) { 
        return data.state === stateName;
    });
    return result[0].code;
}

module.exports.statecode = statecode;