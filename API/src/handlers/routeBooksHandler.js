const getFilterBooksController = require("../controllers/getFilterBooksController.js");
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
    try {
        let books;
        
        //Filter query params without value
        const filterParams = Object.entries(req.query)
                            .filter(([,value]) => value);
        //Si existen campos válidos
        if(filterParams.length){
            books = await getFilterBooksController(Object.fromEntries(filterParams));
            res.json({books});
            return;
        };

        // Este es el controlador /books without queries
        books = await getLibros();
        // Desactivar respuesta 304
        res.set('Cache-Control', 'no-store');
        res.status(200).json({ books });
    } catch ({ message }) {
        res.status(500).json({ error: `Error al obtener los libros: ${message}` });
    }
}

module.exports = routeBooksHandler;