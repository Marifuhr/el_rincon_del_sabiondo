const { Book } = require('../db');
const { v4: uuidv4 } = require('uuid');
const { checkAndCreateLanguage } = require('../utils/checkAndCreateLanguage')


async function createBookHandler (req, res) {
  try {
    const { title, description, language, datePublication, publisher, numberPages, rate, categories, authors } = req.body;


    // Realizar el bulk create de los libros
    // await Book.bulkCreate(books);

    newBook.save()

    res.status(200).json({ newBook });
  } catch (error) {
    console.error('Error al crear los libros:', error);
    res.status(500).json({ error: 'Error al crear los libros' });
  };
};

module.exports = createBookHandler