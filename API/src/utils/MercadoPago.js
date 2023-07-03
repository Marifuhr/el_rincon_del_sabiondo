const defaultImageProduct = 'https://odoo-community.org/web/image/product.product/19823/image_1024/Default%20Product%20Images?unique=5da5e69';

const createPreferences = function(items){
    let preference = {
        items,
        back_urls: {
            success: `${process.env.HOST_FRONT_URL}/home`,
            failure: `${process.env.HOST_FRONT_URL}/home`,
            pending: "",
        },
        auto_return: "approved",
        binary_mode: true,
        statement_descriptor: "El rincón del sabiondo",
        payer: {
            name: "user-name",
            surname: "user-surname",
            email: "user@email.com",
            date_created: "2015-06-02T12:58:41.425-04:00",
            phone: {
                area_code: "57",
                number: 44444444
            }
        },
    };
    return preference;
};

module.exports = {
    createPreferences,
    defaultImageProduct
}