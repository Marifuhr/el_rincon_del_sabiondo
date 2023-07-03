const { Op } = require('sequelize');
const { Author, Language, Review, Selling, Book, Category } = require('../db');

async function getFilterBooksController(dataFilter){
    // Campos para validar
    const fieldToValidate = {
        limit:true, title:true, description:true,language:true,
        category:true, publisher:true, author:true
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

    //Filtra queries que no tengan valores
    const dataToFiltered = Object.entries(dataFilter);
    const filteredQueriesAttributes = Object.fromEntries(dataToFiltered.filter(([key]) => (
        fieldToValidate[key]
    )));
    
    //Entrega un objeto con las funciones validadoras para cada query
    const objDataFiltered = Object.entries(filteredQueriesAttributes).reduce((init, [key, value]) => {
        const objectValidator = objectValidators[key];
        if(objectValidator){
            const objOp = objectValidator(value);
            return {
                ...init,
                [key]:objOp
            };
        };
        return init;
    },{});

    const {limit, ...restObjValidators} = objDataFiltered;
    
    // Consulta el modelo
    const filteredBooksDB = await Book.findAll({
        where:{
            ...restObjValidators
        },
        limit: filteredQueriesAttributes.limit || null,
        include: [
            {
                model: Category,
                through:{
                    attributes:[]
                }
            },
            {
                model: Author,
                through:{
                    attributes:[]
                }
            },
            {
                model: Language,
                as:'languageBook',
                attributes: ['language'],
            },
            {
                model: Review
            },
            {
                model: Selling,
                as:"sellings"
            }
        ]
    });

    console.log(filteredQueriesAttributes);
    const filteredBooks = filteredBooksDB.filter(({Categories}) => {
        if(filteredQueriesAttributes.category){
            const {category} = filteredQueriesAttributes;
            const validate = Categories.some(({name}) => {
                return new RegExp(category,'i').test(name)
            });

            return validate;
        }
        return true;
    }).filter(({Authors}) => {
        if(filteredQueriesAttributes.author){
            const {author} = filteredQueriesAttributes;
            const validate = Authors.some(({name}) => {
                return new RegExp(author,'i').test(name)
            });
            return validate;
        }
        return true;
    })

    return filteredBooks;
};

module.exports = getFilterBooksController;