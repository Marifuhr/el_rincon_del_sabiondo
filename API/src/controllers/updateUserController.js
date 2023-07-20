const { User } = require("../db.js");

const errorFieldsToUpdate = {
  role: "El role no es válido",
  picture: "El url de la imágen no es válida",
  name: "El nombre debe tener entre 5 - 50 carácteres",
  // isActive: 'El estado de Usuario debe ser un valor Booleano',
  email: "El email no es válido",
  address: "La dirección no es válida",
  province: "La provincia no es válida",
  postalCode: "El código postal no es válido",
  country: "El país no es válido",
  city: "La ciudad no es válida",
};

const validationsAttributes = {
    role: rol => {
        const roles = ['user', 'moderator', 'admin', 'superuser'];
        return roles.includes(rol);
    },
    picture: (image) => {
        const erValidateUrl = /^(https?:\/\/)?(([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(#[-a-z\d_]*)?$/i;
	    return !!erValidateUrl.test(image);
    },
    name: nameString => {
        const l = nameString.length;
        return l >= 5 && l <= 50
    },
    //isActive: stateUser => [true,false].includes(stateUser),
    email: emailToValidate => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailToValidate),
    address: addressString => {
        const l = addressString.trim().length;
        return l >= 5 && l <= 100
    },
    province: provinceString =>{
        const l = provinceString.trim().length;
        return l >= 5 && l <= 50
    },
    postalCode: postalCodeString => {
        const l = postalCodeString.toString().trim().length;
        return l >= 4 && l <= 10
    },
    country: countryString => {
        const l = countryString.trim().length;
        return l >= 4 && l <= 50
    },
    city: cityString => {
        const l = cityString.trim().length;
        return l >= 5 && l <= 50
    }
};

module.exports = async function ({ id_user, dataToUpdate }) {

  //console.log('entré a updateUserController')
  //Validate query values
  for (let [fieldKey, fieldValue] of Object.entries(dataToUpdate)) {
    //Get function to field validate
    const validationForField = validationsAttributes[fieldKey];
    if (!validationForField) continue;

    //Execute function to field validate
    const validateValueField = validationForField(fieldValue);
    if (!validateValueField) {
      //console.log(`errorFieldsToUpdate[${fieldKey}]`);
      throw new Error(errorFieldsToUpdate[fieldKey]);
    }
  }

  //At this point the values have no errors
  const findUser = await User.findOne({
    where: { IdUser: id_user },
  });
  // console.log(id_user)
  // console.log(dataToUpdate)

  //Si el usuario no existe
  if (!findUser)
    throw new Error(`El usuario que intentas actualizar no existe`);

  //Si ya existe lo actualiza

  const user = await findUser.update(dataToUpdate);

  return user;
}; 
