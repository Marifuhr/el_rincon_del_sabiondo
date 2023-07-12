const getAllSellings = require("../controllers/getAllSellings");

module.exports = async function (req,res){
    try {
        const sellingsTotals = await getAllSellings();
        res.json({sellingsTotals});
    } catch ({message}) {
        res.json({error:message});
    };
};