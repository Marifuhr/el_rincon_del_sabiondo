const createPreferences = function(items){
    let preference = {
        items,
        back_urls: {
            success: "http://localhost:5173/home",
            failure: "http://localhost:5173/home",
            pending: "",
        },
        auto_return: "approved",
    };
    return preference;
};

module.exports = {
    createPreferences
}