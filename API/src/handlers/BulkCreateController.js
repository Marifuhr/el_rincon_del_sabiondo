const bookController = require('../controllers/bookController');
const { Book } = require('../db');
const { v4: uuidv4 } = require('uuid');
const { Language, Country } = require('../db');
const bulkCreateBooks = require('./BulkCreateBooks')

// async function checkAndCreateCountry(countryCode) {
//   const country = await Country.findOne({ where: { IdCountry: countryCode } });

//   if (!country) {
//     // El país no existe en la tabla, crearlo
//     await Country.create({ IdCountry: countryCode, country: countryCode+'ss' });
//   }
// }


async function bulkCreateController (req, res) {
  
  const books = req.body;
  
  try {
    bulkCreateBooks(books);

  
  
    //   const { title, description, language, datePublication, countryPublication, publisher, numberPages, rate, categories, authors } = req.body;

  // //  console.log(req.body)

  //   await checkAndCreateLanguage(language);

  //   // Verificar y crear el país si no existe
  //   await checkAndCreateCountry(countryPublication);

  //   const newBook = Book.build({ id: uuidv4(), title, description, language, datePublication, countryPublication, publisher, numberPages, rate })

  //   // Realizar el bulk create de los libros
  //   // await Book.bulkCreate(books);

  //   newBook.save()

  //   res.status(200).json({ newBook });
  } catch (error) {
    console.error('Error al crear los libros:', error);
    res.status(500).json({ error: 'Error al crear los libros' });
  };
};

module.exports = bulkCreateController