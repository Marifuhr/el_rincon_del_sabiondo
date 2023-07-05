const getLanguages = require("../controllers/getLanguage.js");

async function routeLanguagesHandler(req, res) {
  try {
    const languages = await getLanguages();
    res.status(200).json({ languages });
  } catch ({ message }) {
    res.status(500).json({ error: `Error al obtener los lenguajes: ${message}` });
  }
}

module.exports = routeLanguagesHandler;
