const createBulKSellingIndividual = require("../controllers/createBulKSellingIndividual");
const createSellingTotal = require("../controllers/createSellingTotal");
const getASellingTotal = require("../controllers/getASellingTotal");
const { checkBooksValuesOrId } = require("../utils/checkBooksValuesOrId");
const checkEmptyValuesObject = require("../utils/checkEmptyValuesObject");
const checkStock = require ('../controllers/checkStock')

module.exports = async function(req,res){
    try {
        const { products, IdUser } = req.body;
        
        //Validate values in body
        // checkEmptyValuesObject({ products, IdUser });
        // checkBooksValuesOrId(products);
        //chequear stock
        checkStock(products);
        //console.log('estoy en routerselling')
        //console.log(products)
        const SellingTotalCreated = await createSellingTotal({IdUser});
        const {IdSellingTotal} = SellingTotalCreated;
        
        const sellings = await createBulKSellingIndividual(products, IdSellingTotal);
        const SellingTotal = await getASellingTotal({IdSelling: IdSellingTotal});
        res.json({ SellingTotal, sellings });
    } catch (error) {
        res.json({error: error.message});
    };
};