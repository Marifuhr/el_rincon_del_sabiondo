const updateUserController = require("../controllers/updateUserController");

module.exports = async function (req, res) {
    try {
        const { id_user } = req.params;
        const { name, email, picture, isActive, role, address, province, postalCode, country, city } = req.body;

        //Filter field by empty values
        const filterEmptyValues = Object.entries({ name, city, email, picture, role, address, province, isActive, postalCode, country }).filter( ([k,v]) => {
            if(k === 'isActive'){
                return isActive?.toString() || false;
            }
            return v
        });
        
        if(!filterEmptyValues.length) throw new Error('No tienes valores válidos para actualizar un usuario');

        const dataToUpdate = Object.fromEntries(filterEmptyValues);
        //console.log(dataToUpdate)
        //dataToUpdate.isActive = isActive;
        const updatedUser = await updateUserController({id_user,dataToUpdate});

        //Response to cient
        res.status(200).json(updatedUser);
    } catch (error) {
        //console.log(error)
        res.status(500).json({ error: error.message })
    }
} 