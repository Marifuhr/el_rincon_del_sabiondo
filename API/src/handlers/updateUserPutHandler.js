const updateUserController = require("../controllers/updateUserController");

module.exports = async function (req, res) {
    try {
        const { id_user } = req.params;
        const { name, email, picture, isActive, role, address, province, postalCode, country, city } = req.body;
        console.log(isActive);
        //Filter field by empty values
        const filterEmptyValues = Object.entries({ name, city, email, picture, isActive, role, address, province, postalCode, country }).filter( ([,v]) => v);
        console.log(filterEmptyValues);
        if(!filterEmptyValues.length) throw new Error('No tienes valores válidos para actualizar un usuario');

        let dataToUpdate = Object.fromEntries(filterEmptyValues);
        dataToUpdate.isActive = isActive;
        console.log(dataToUpdate);
        let updatedUser = await updateUserController({id_user, dataToUpdate})
        res.json(updatedUser);
    } catch ({ message }) {
        res.json({ error: message })
    }
}