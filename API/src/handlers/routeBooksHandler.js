const getLibros = require("../controllers/getLibros.js");

// async function routeBooksHandler(req,res){
//     try {
//         //Este es el controlador
//         const libros = await getLibros();
//         res.status(200).json({ libros });
//     } catch ({message}) {
//     res.status(500).json({ error: `Error al obtener los libros: ${message}` });
//     };
// };

// module.exports = routeBooksHandler;
async function routeBooksHandler(req, res) {

    const { title } = req.query;

    if (title) {
        try {
            const books = await getLibros(title);
            res.status(200).json({ books });
        } catch ({ message }) {
            res.status(500).json({ error: `Error al obtener los libros: ${message}` });
        };
    } else {
        try {
            // Este es el controlador
            const books = await getLibros();
    
            // Desactivar respuesta 304
            res.set('Cache-Control', 'no-store');
    
            res.status(200).json({ books });
        } catch ({ message }) {
            res.status(500).json({ error: `Error al obtener los libros: ${message}` });
        }
    }
}

module.exports = routeBooksHandler;