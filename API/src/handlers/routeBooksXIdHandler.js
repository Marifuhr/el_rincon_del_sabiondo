const getLibros = require("../controllers/getLibros.js");

async function routeBooksXIdHandler(req, res) {
  try {
    const { id } = req.params;

    // Este es el controlador
    const books = await getLibros();

    let finded = books.find((element) => element.IdBook == id);

    if (finded.length === 0) {
      return res.status(404).send({ message: "Libro no encontrado" });
    }

    // Desactivar respuesta 304
    res.set("Cache-Control", "no-store");

    res.status(200).json({ finded });
  } catch ({ message }) {
    res.status(500).json({ error: `Error al obtener los libros: ${message}` });
  }
}

module.exports = routeBooksXIdHandler;
