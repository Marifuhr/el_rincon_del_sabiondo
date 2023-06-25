const checkAndCreateLanguage = require('../utils/checkAndCreateLanguage')
const checkAndCreateAuthors = require('../utils/checkAndCreateAuthors')
const checkAndCreateCategories = require('../utils/checkAndCreateCategories')
const { Book } = require('../db');
const { v4: uuidv4 } = require('uuid');

async function createBook({ title, description, language, datePublication, publisher, numberPages, rate, categories, authors }) {
  try {
    const languageExists = await checkAndCreateLanguage(language);
    if (languageExists) {
      const newBook = Book.build({
        id: uuidv4(),
        title,
        description,
        language,
        datePublication,
        publisher,
        numberPages,
        rate
      });
    }
    const createdBook = await newBook.save();

    const filteredAuthors = await checkAndCreateAuthors(authors);
    const filteredCategories = await checkAndCreateCategories(categories);
    if (filteredAuthors && filteredCategories) {
      await createdBook.setAuthors(filteredAuthors);
      await createdBook.setCategories(filteredCategories);
    }
    return createdBook;
  } catch (error) {
    console.error({ error : error.message });
  }
}

module.exports = createBook;