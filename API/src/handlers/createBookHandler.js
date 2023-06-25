const createBook = require('../controllers/createBook')


async function createBookHandler (req, res) {
  try {
    const { title, description, language, datePublication, publisher, numberPages, rate, categories, authors } = req.body;
    const newBook = createBook({ title, description, language, datePublication, publisher, numberPages, rate, categories, authors })
    
    res.status(200).json({ newBook });
  } catch (error) {
    console.error('Error al crear los libros:', error);
    res.status(500).json({ error: 'Error al crear los libros' });
  };
};

module.exports = createBookHandler