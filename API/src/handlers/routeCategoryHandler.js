const getCategory = require("../controllers/getCategory.js");

async function getAllCategory  (req, res)  {
    try {
      // Obtener todas las categorías
      const result = await getCategory();
      const categories = result;
      
      // Enviar las categorías como respuesta
      res.json({categories});
    } catch (error) {
      console.error('Error al obtener las categorías:', error);
      res.status(500).json({ error: 'Error al obtener las categorías' });
    }
};

module.exports = getAllCategory;