const mercadopago = require("mercadopago");
const createPayMercadoPago = async function(preference){
    const response = await mercadopago.preferences.create(preference)
    return response;
};

module.exports = createPayMercadoPago;