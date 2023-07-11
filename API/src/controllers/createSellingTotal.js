const { SellingTotal } = require('../db');

module.exports = async function({IdUser}){
    const data = await SellingTotal.create({IdUser});
    return data;
};