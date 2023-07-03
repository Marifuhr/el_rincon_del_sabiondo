const createPayMercadoPago = require("../controllers/createPayMercadoPago");
const { createPreferences, parsedValidateProducts } = require('../utils/MercadoPago');

module.exports = async (req, res) => {
    //! ===========================================================================
    //! Realizar integración de User para relacionar una venta con la Base de Datos
    //! ===========================================================================

    try {
        const {products} = req.body;
        if(!products) throw new Error('Debes agregar una lista de productos');

        //Valida los campos para cada producto y los agrega en un arreglo parseandolo
        const lastProducts = parsedValidateProducts(products);
        
        const preference = createPreferences(lastProducts);
        const data = await createPayMercadoPago(preference);
        
        res.json(data);
    } catch ({message}) {
        res.json({error:message});
    };
};