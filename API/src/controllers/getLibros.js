const {Author, Selling, Review, Book, Category, Country,Language } = require('../db');
const { Op } = require("sequelize");

//Controller connect with database to realize sql query
const getLibros = async (title = null) => {

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

    if (title) {
        options.where = {
            title: {
                [Op.iLike]: `%${title}%`
            }
        };
    } 
    const books = Book.findAll(options)
    return books;
};

module.exports = getLibros;
