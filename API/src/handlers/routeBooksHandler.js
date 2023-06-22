const getLibros = require("../controllers/getLibros.js");

async function routeBooksHandler(req,res){
    try {
        //Este es el controlador
        const libros = await getLibros();
        res.status(200).json({ libros });
    } catch ({message}) {
    res.status(500).json({ error: `Error al obtener los libros: ${message}` });
    };
};

module.exports = routeBooksHandler;