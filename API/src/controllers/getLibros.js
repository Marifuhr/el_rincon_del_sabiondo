const { Book, Category, Country,Language } = require('../models');

const getLibros = async (req, res) => {
  try {
    const libros = await Book.findAll({
      include: [
        { model: Category },
        { model: Country },
        { model: Language }
      ]
    });

    res.status(200).json({ libros });
  } catch (error) {
    console.error('Error al obtener los libros:', error);
    res.status(500).json({ error: 'Error al obtener los libros' });
  }
}

module.exports = { getLibros };
