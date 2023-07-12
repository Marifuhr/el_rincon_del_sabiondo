const { SellingTotal, Selling, Book } = require('../db');

module.exports = async function({IdSelling}){
    const data = await SellingTotal.findByPk(IdSelling,{
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