const { Book } = require('../db');

exports.bulkCreateBooks = async (req, res) => {
  try {
    const { books } = req.body;

    // Realizar el bulk create de los libros
    await Book.bulkCreate(books);

    res.status(200).json({ message: 'Libros creados exitosamente' });
  } catch (error) {
    console.error('Error al crear los libros:', error);
    res.status(500).json({ error: 'Error al crear los libros' });
  }
};
