const createBook = require('../controllers/createBook')


async function createBookHandler (req, res) {
  try {
    const { title, description, language, datePublication, publisher, numberPages, category, authors, image, isbn, price } = req.body;
    const newBook = await createBook({ title, description, language, datePublication, publisher, numberPages, category, authors, image, isbn, price });
    console.log(newBook);
    if (newBook.error) {
      return res.status(418).json({ error: newBook.error });
    }
    res.status(200).json( newBook );
  } catch (error) {
    console.error('Error al crear los libros:', error);
    console.log(error);
    res.status(500).json({ error: 'Error al crear los libros' });
  };
};

module.exports = createBookHandler