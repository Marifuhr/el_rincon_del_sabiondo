const { Book } = require("../db.js");

/* { price, stock, isActive} */

const errorFieldsToUpdate = {
    title: 'El titulo no es válido, debe tener entre 2 y 120 carácteres',
    description: 'El titulo no es válido, debe tener entre 10 y 5000 carácteres',
    image: 'La url de la imágen no es válida',
    publisher: 'La editorial no es válida, debe contener entre 2 y 100 carácteres',
    numberPages: 'La cantidad de páginas no es válida, no debe estar fuera del rango [1, 10000]',
    price: 'El precio no es válido, no debe exceder los 1000.00 y tampoco ser menor a 0.00',
    stock: 'El stock no es válido, debe ser mayor o igual a una cantidad de 0',
    isActive: 'Debes enviar un valor Booleano para activo y/o desactivar un Libro'
};

const validationsAttributes = {
    title: ({ length: l }) => l >= 2 && l <= 120,
    description: ({ length: l }) => l >= 10 && l <= 5000,
    image: imgUrl => /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm.test(imgUrl),
    publisher: ({ length: l }) => l >= 2 && l <= 100,
    numberPages: n => n >= 1 && n < 10000,
    price: p => parseFloat(p) < 1000.00,
    stock: n => n >= 0,
    isActive: isA => ['true', 'false'].includes(isA.toString())
};

module.exports = async function (IdBook, updatedValues) {
    //Validate query values
    for (let [fieldKey, fieldValue] of Object.entries(updatedValues)) {
        //Get function to field validate
        const validationForField = validationsAttributes[fieldKey];
        if (!validationForField) continue;

        //Execute function to field validate
        const validateValueField = validationForField(fieldValue);
        if (!validateValueField) {
            throw new Error(errorFieldsToUpdate[fieldKey]);
        }
    }

    //At this point the values have no errors
    const findBook = await Book.findOne({
        where: { IdBook },
    });

    //Si el usuario no existe
    if (!findBook) throw new Error(`El libro que intentas actualizar no existe`);

    //Si ya existe lo actualiza
    const book = await findBook.update(updatedValues);

    return book;
};
