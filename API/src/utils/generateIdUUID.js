const { v4:uuidv4 } = require('uuid');

function generateIdUUID(){
    return uuidv4();
};

module.exports = generateIdUUID;