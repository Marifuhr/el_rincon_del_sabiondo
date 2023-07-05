const {Author, Selling, Review, Book, Category, Country,Language } = require('../db');

//Controller connect with database to realize sql query
const getLibros = async () => {
    const books = await Book.findAll({
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
        ],
    });
    return books;
};

module.exports = getLibros;
