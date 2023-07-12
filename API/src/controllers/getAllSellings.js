const { SellingTotal, Selling, Book } = require("../db");

module.exports = async function(){
    const data = await SellingTotal.findAll({
        include:[
            {
                model: Selling,
                as:'products',
                include:[
                    {
                        model: Book
                    }
                ]
            }
        ]
    });
    return data;
}