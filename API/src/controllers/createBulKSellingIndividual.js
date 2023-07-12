const { Selling } = require('../db');
const { parsedIdProducts } = require('../utils/checkBooksValuesOrId');

module.exports = async function({products, IdSellingTotal}){
    const valueSellings = parsedIdProducts(products).map(IdProduct => ({
        IdProduct,
        IdSellingTotal
    }));

    const data = await Selling.bulkCreate(valueSellings);
    return data;
};