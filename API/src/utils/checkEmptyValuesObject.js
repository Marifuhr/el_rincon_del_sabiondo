const { setErrorEmptyValue } = require("./ErrorTypes");

module.exports = function(obj){
    for(let [key, val] of Object.entries(obj)){
        if(!val){
            throw setErrorEmptyValue(`Ha habido un error: El campo ${key} no puede estar vacío`);
        };
    };
};