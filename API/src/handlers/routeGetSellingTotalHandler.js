const { validate } = require('uuid');
const getASellingTotal = require('../controllers/getASellingTotal');
module.exports = async function(req,res){
    try{
        const { IdSelling } = req.params;
        if(!IdSelling) throw new Error('No tienes un IdSelling');

        //Validate UUIDV4
        const validateUUIDSelling = validate(IdSelling);
        if(!validateUUIDSelling) throw new Error('No es un Id válido para la busqueda');

        //Get Selling
        const selling = await getASellingTotal({IdSelling});
        
        res.json(selling);
    }catch({message}){
        res.json({error: message});
    };
};