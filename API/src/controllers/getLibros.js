const { Book, Category, Country,Language } = require('../db');

//Controller connect with database to realize sql query
const getLibros = async () => {
    const libros = await Book.findAll({
        include: [
            {
                model: Category
            },
            {
                model: Country
            },
            {
                model: Language
            }
        ]
    });
    return libros;
};

module.exports = getLibros;
