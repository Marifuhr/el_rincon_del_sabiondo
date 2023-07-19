const { Selling } = require('../db');
const { parsedIdProducts } = require('../utils/checkBooksValuesOrId');
const stockDiscounter = require('../controllers/stockDiscounter');

module.exports = async function(products, IdSellingTotal){
    const valueSellings = parsedIdProducts(products).map(IdProduct => ({
        IdProduct : IdProduct.IdProduct,
        IdSellingTotal, 
        quantity: IdProduct.quantity,
    }));
    //console.log('estoy en selling')
    //console.log(valueSellings)
    const data = await Selling.bulkCreate(valueSellings);
    stockDiscounter(valueSellings)
    return data;
};