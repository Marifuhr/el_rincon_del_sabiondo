const bulkCreateBooks = require('../controllers/bulkcreateBooks')

async function bulkCreateBooksHandler (req, res) {
  
  const books = req.body;
  
  try {
    const createdBooks = await bulkCreateBooks(books);
    res.status(200).json( { createdBooks } )
  } catch (error) {
    console.error('Error al crear los libros:', error);
    res.status(500).json({ error: error.message });
  };
};

module.exports = bulkCreateBooksHandler