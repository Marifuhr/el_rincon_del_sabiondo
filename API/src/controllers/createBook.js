const { checkAndCreateLanguage } = require('../utils/checkAndCreateLanguage')
const { Book } = require('../db');
const { v4: uuidv4 } = require('uuid');

async function createBook({ title, description, language, datePublication, publisher, numberPages, rate, categories, authors }) {

  await checkAndCreateLanguage(language);

  const newBook = Book.build({ id: uuidv4(), title, description, language, datePublication, publisher, numberPages, rate })



}

module.exports = createBook;