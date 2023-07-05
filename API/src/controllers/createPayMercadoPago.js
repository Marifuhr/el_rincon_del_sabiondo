const mercadopago = require("mercadopago");

//Realiza la solicitud de pago según un Objeto preference definido por MercadoPago.js
const createPayMercadoPago = async function(preference){
    const response = await mercadopago.preferences.create(preference)
    return response;
};

module.exports = createPayMercadoPago;