const { Language } = require('../db');

async function checkAndCreateLanguage(languageCode) {
  let languageName;

  switch (languageCode) {
    case 'en':
      languageName = 'english';
      break;
    case 'es':
      languageName = 'español';
      break;
    case 'ru':
      languageName = 'russian';
      break;
    default:
      languageName = 'another';
      break;
  }

  const language = await Language.findOne({ where: { IdLanguage: languageCode } });

  if (!language) {
    // El idioma no existe en la tabla, crearlo
    const newLanguage = await Language.create({ IdLanguage: languageCode, language: languageName });
    return newLanguage.IdLanguage;
  }
  
  return 'El lenguaje ' + languageName + ' ya existe';
}

module.exports = checkAndCreateLanguage;