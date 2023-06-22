const {Author, Selling, Review, Book, Category, Country,Language } = require('../db');

//Controller connect with database to realize sql query
const getLibros = async () => {
    const libros = await Book.findAll({
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
                model: Country,
                as:'countryPublicationData'
            },
            {
                model: Language,
                as:'languageBook'
            },
            {
                model: Review
            },
            {
                model: Selling,
                as:"sellings"
            }
        ],
        attributes:{
            exclude:['language','countryPublication']
        }
    });
    return libros;
};

module.exports = getLibros;
