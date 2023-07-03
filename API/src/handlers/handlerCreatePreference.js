const createPayMercadoPago = require("../controllers/createPayMercadoPago");
const { createPreferences } = require('../utils/MercadoPago');
module.exports = async (req, res) => {
    try {
        const {products} = req.body;
        if(!products) throw new Error('Debes agregar una lista de productos');

        let lastProducts = [];
        for(let p of products){
            const { title, description, picture_url, quantity, unit_price} = p;
            if(!title || description || quantity || unit_price){
                throw new Error('Los productos no tienen todas las propiedades solicitadas')
            }
        }

        //Filter products
        const preference = createPreferences(lastProducts);
        const data = await createPayMercadoPago(preference)
        res.json(data);
    } catch ({message}) {
        res.json({error:message});
    };
};