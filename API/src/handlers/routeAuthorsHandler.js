const getAllAuthors = require("../controllers/getAllAuthors");

//Handler para la ruta /authors
const routeAuthorsHandler = async (req,res) => {
    try {
        //Ejecuta el controller para traer todos los Autores
        const authors = await getAllAuthors();

        //Respuesta del servidor
        res.json({authors});
    } catch ({message}) {
        //Si hay un error, se envía error de servidor
        res.status(500).json({message});
    };
};

module.exports = routeAuthorsHandler;