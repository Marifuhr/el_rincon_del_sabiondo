const { checkAndCreateLanguage } = require('../utils/checkAndCreateLanguage')
const { Book } = require('../db');
const { v4: uuidv4 } = require('uuid');

async function createBook({ title, description, language, datePublication, publisher, numberPages, rate, categories, authors }) {

  try {
    const check = await checkAndCreateLanguage(language);
    if (check) {
      const newBook = Book.build({ id: uuidv4(), title, description, language, datePublication, publisher, numberPages, rate })
      
    }  
  } catch (error) {
    
  }

  




}

module.exports = createBook;