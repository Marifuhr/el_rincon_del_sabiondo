const getUsersController = require("../controllers/getUsersController");

async function getUsers (req, res)  {
    try {
      const users = await getUsersController();
            
      res.status(200).json(users);
    } catch (error) {
      console.error('Error al obtener Usuarios:', error);
      res.status(500).json({ error: error.message }); 
    }
};

module.exports = getUsers;