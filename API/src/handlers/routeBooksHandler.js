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
        let libros;
        
        //Filter query params without value
        const filterParams = Object.entries(req.query)
                            .filter(([key,value]) => value);
        //Si existen campos válidos
        if(filterParams.length){
            libros = await getFilterBooksController(Object.fromEntries(filterParams));
            console.log(libros);
            
            res.json({libros:'perfecto'});
            return;
        };

        // Este es el controlador /books without queries
        libros = await getLibros();
        // Desactivar respuesta 304
        res.set('Cache-Control', 'no-store');
        res.status(200).json({ libros });
    } catch ({ message }) {
        res.status(500).json({ error: `Error al obtener los libros: ${message}` });
    }
}

module.exports = routeBooksHandler;