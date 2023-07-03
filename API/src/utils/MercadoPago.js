//URL para definir una imágen de producto por defecto en caso de que esta no exista
const defaultImageProduct = 'https://odoo-community.org/web/image/product.product/19823/image_1024/Default%20Product%20Images?unique=5da5e69';

//Genera un Objeto para realizar las ventas de productos
const createPreferences = function(items){
    let preference = {
        items,
        back_urls: {
            success: `${process.env.HOST_FRONT_URL}/home`,
            failure: `${process.env.HOST_FRONT_URL}/home`,
            pending: "",
        },
        auto_return: "approved",
        statement_descriptor: "El rincón del sabiondo",
        binary_mode: true,
    };
    return preference;
};

//Valida y parsea la Información obtenida desde el objeto Post
const parsedValidateProducts = function(products){
    let lastProducts = [];
    for(let p of products){
        const { title, description, picture_url, quantity, unit_price} = p;
        
        if(!title || !description || !quantity || !unit_price){
            throw new Error('Los productos no tienen todas las propiedades solicitadas');
        };

        const product = {
            title,
            description,
            picture_url: picture_url || defaultImageProduct,
            quantity: Number(quantity),
            unit_price: Number(unit_price)
        };
        lastProducts = [...lastProducts, product];
    };
    return lastProducts;
}


module.exports = {
    createPreferences,
    defaultImageProduct,
    parsedValidateProducts
}