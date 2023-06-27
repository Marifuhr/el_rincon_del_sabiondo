const createBook = require('../controllers/createBook')


async function createBookHandler (req, res) {
  try {
    const { title, description, language, datePublication, publisher, numberPages, rate, category, authors, image, ISBN } = req.body;
    const newBook = await createBook({ title, description, language, datePublication, publisher, numberPages, rate, category, authors, image, ISBN });
    if (newBook.error) {
      return res.status(418).json({ error: newBook.error });
    }
    res.status(200).json( newBook );
  } catch (error) {
    console.error('Error al crear los libros:', error);
    res.status(500).json({ error: 'Error al crear los libros' });
  };
};

module.exports = createBookHandler