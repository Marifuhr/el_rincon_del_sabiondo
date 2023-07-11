const { User } = require('../db.js');

const errorFieldsToUpdate = {
    role: 'El role no es válido',
    picture: 'El url de la imágen no es válida',
    name: 'El nombre debe tener entre 5 - 50 carácteres',
    isActive: 'El estado de Usuario debe ser un valor Booleano',
    email: 'El email no es válido'
};

const validationsAttributes = {
    role: rol => {
        const roles = ['user', 'moderator', 'admin', 'superuser'];
        return roles.includes(rol);
    },
    picture: (image) => {
        const erValidateUrl = new RegExp('^(https?:\\/\\/)?'+ 
	    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+
	    '((\\d{1,3}\\.){3}\\d{1,3}))'+'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+
	    '(\\?[;&a-z\\d%_.~+=-]*)?'+'(\\#[-a-z\\d_]*)?$','i');
	  return !!erValidateUrl.test(image);
    },
    name: nameString => {
        const l = nameString.length;
        return l >= 5 && l <= 50
    },
    isActive: stateUser => [true,false].includes(stateUser),
    email: emailToValidate => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailToValidate),
};

module.exports = async function({id_user, dataToUpdate}){
    //Validate query values
    for(let [fieldKey,fieldValue] of Object.entries(dataToUpdate)){
        //Get function to field validate
        const validationForField = validationsAttributes[fieldKey]
        if(!validationForField) continue;

        //Execute function to field validate
        const validateValueField = validationForField(fieldValue);
        if(!validateValueField){
            throw new Error(errorFieldsToUpdate[fieldKey]);
        };
    }

    //At this point the values have no errors
    const findUser = await User.findOne({
        where:{ IdUser: id_user}
    });
    
    //Si el usuario no existe
    if(!findUser) throw new Error(`El usuario que intentas actualizar no existe`);

    //Si ya existe lo actualiza
    const user = await findUser.update(dataToUpdate);

    return user;
};