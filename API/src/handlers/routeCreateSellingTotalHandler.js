const createBulKSellingIndividual = require("../controllers/createBulKSellingIndividual");
const createSellingTotal = require("../controllers/createSellingTotal");
const getASellingTotal = require("../controllers/getASellingTotal");
const { checkBooksValuesOrId } = require("../utils/checkBooksValuesOrId");
const checkEmptyValuesObject = require("../utils/checkEmptyValuesObject");

module.exports = async function(req,res){
    try {
        const { products, IdUser } = req.body;
        
        //Validate values in body
        checkEmptyValuesObject({ products, IdUser });
        checkBooksValuesOrId(products);

        const SellingTotalCreated = await createSellingTotal({IdUser});
        const {IdSellingTotal} = SellingTotalCreated;
        
        await createBulKSellingIndividual({products, IdSellingTotal });
        const SellingTotal = await getASellingTotal({IdSelling: IdSellingTotal});
        res.json(SellingTotal);
    } catch (error) {
        res.json({error:`${name} | ${message}`});
    };
};