const { Language } = require('../db');

const getLanguages = async () => {
  const languages = await Language.findAll();
  return languages;
};

module.exports = getLanguages;
