const { Op } = require('sequelize');
const { Book } = require('../db');

async function getFilterBooksController(dataFilter){
    // Campos para validar
    const fieldToValidate = {
        limit:true, title:true, description:true,language:true,
        category:true, publisher:true
    };
    const objectValidators = {
        title: (val) => ({
            [Op.iLike]: `%${val}%`
        }),
        description: val => ({
            [Op.iLike]: `%${val}%`
        }),
        publisher: val => ({
            [Op.like]: `%${val}%`
        }),
        language: val => ({
            [Op.iLike]: val
        })
    };

    //Falta categorías

    const dataToFiltered = Object.entries(dataFilter);
    const objDataFiltered = dataToFiltered.filter(([key]) => (
        fieldToValidate[key]
    ))
    .reduce((init, [key, value]) => {
        const objectValidator = objectValidators[key];
        if(objectValidator){
            const objOp = objectValidator(value);
            return {
                ...init,
                [key]:objOp
            };
        };
        return {...init, [key]:value}
    },{});

    const {limit = null, ...restObjValidators} = objDataFiltered;
    console.log(restObjValidators);
    // Consulta el modelo
    const filteredBooks = await Book.findAll({
        where:restObjValidators
    });

    return filteredBooks;
};

module.exports = getFilterBooksController;