const { validate } = require('uuid');
const { setErrorInvalidId, setErrorEmptyValue } = require('./ErrorTypes');

function checkBooksValuesOrId (books = []){
    if(!books.length) throw setErrorEmptyValue('Los lista de productos no pueden estar vacía');
    const parsedIdBookByBook = parsedIdProducts(books);
    for(let IdBook of parsedIdBookByBook){
        const validateIdBook = validate(IdBook);
        
        if(!validateIdBook){
            throw setErrorInvalidId(`El ${IdBook} no es un Id Válido para Book`);
        };
    };
};

function parsedIdProducts(products){
    return products.map(p => {
        const typeId = typeof p;
        const typeValue = {
            string: () => p,
            object: () => p.IdBook
        };
    
        return typeValue[typeId]();
    })
};

module.exports = {
    parsedIdProducts,
    checkBooksValuesOrId
}