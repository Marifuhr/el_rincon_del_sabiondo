const getCategory = require("../controllers/getCategory.js");

async function getAllCategory  (req, res)  {
    try {
      // Obtener todas las categorías
      const query = 'SELECT * FROM category';
      const result = await pool.query(query);
      const categories = result.rows;
      
      // Enviar las categorías como respuesta
      res.json(category);
    } catch (error) {
      console.error('Error al obtener las categorías:', error);
      res.status(500).json({ error: 'Error al obtener las categorías' });
    }
  };