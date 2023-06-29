const checkAndCreateLanguage = require('../utils/checkAndCreateLanguage')
const checkAndCreateAuthors = require('../utils/checkAndCreateAuthors')
const checkAndCreateCategories = require('../utils/checkAndCreateCategories')
const { Book } = require('../db');
const { v4: uuidv4 } = require('uuid');
const validator = require('../utils/validator');
const getFilterBooksController = require('./getFilterBooksController')

async function createBook({ title, description, language, datePublication, publisher, numberPages, rate, category, authors, image, ISBN, price }) {
  console.log(title)
  const errors = await validator({ title, description, language, datePublication, publisher, numberPages, rate, category, authors, image, ISBN, price });
  console.log(errors);
  if (errors?.length > 0) {
    return { error : errors };
  }
  
  const existingBook = await getFilterBooksController({ title });
  console.log(existingBook)
  if (existingBook && existingBook.length > 0) {
    return { error: 'Ya existe un libro con ese título' };
  }

  try {
    const languageExists = await checkAndCreateLanguage(language);
    const filteredAuthors = await checkAndCreateAuthors(authors);
    const filteredCategories = await checkAndCreateCategories({ category });
    console.log({ filteredAuthors, filteredCategories });

    if (languageExists) {
      const newBook = Book.build({
        id: uuidv4(),
        title,
        description,
        language,
        datePublication,
        publisher,
        numberPages,
        rate,
        image,
        ISBN,
        price
      });
    
  
    const createdBook = await newBook.save();
    await createdBook.setAuthors(filteredAuthors);
    await createdBook.setCategories(filteredCategories);
    

    return createdBook;
    }
  } catch (error) {
    console.error({ error : error.message });
  }
}


module.exports = createBook;