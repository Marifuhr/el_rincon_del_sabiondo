const {Author, Selling, Review, Book, Category, Country,Language } = require('../db');

//Controller connect with database to realize sql query
const getLibros = async (name = null) => {

    const options = {
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
    }

    if (name) {
        options.where = {
            title: {
                [Op.iLike]: `%${name}%`
            }
        };
    } 
    const books = Book.findAll(options)
    return books;
};

module.exports = getLibros;
