const { Book, Author, Category, Language } = require('../db');
const { Op } = require('sequelize');
const checkAndCreateLanguage = require('../utils/checkAndCreateLanguage');

async function bulkCreateBooks(books) {
  //console.log(books);
  try {
    // Verificar y crear los idiomas necesarios
    const languageCodes = books.map(book => book.language);
    const uniqueLanguageCodes = [...new Set(languageCodes)]; // Obtener códigos de idioma únicos

    for (const languageCode of uniqueLanguageCodes) {
      await checkAndCreateLanguage(languageCode);
    }

    let filteredbooks = []

    for (const book of books) {
      const foundbook = await Book.findOne({
        where: {
          title: {
            [Op.iLike]: book.title
          }
        }
      });

      if (!foundbook) {
        filteredbooks.push(book)    
      }
    }

    const createdBooks = await Book.bulkCreate(filteredbooks);
    console.log('Libros creados:', createdBooks);

    // Asignar autores y categorías a los libros creados
    for (const book of createdBooks) {
      let temp = books.find(raw => raw.title === book.title)

      let authors = temp.authors;
      let categories = temp.categories;
      console.log({authors, categories});

      if (authors && authors.length > 0) {
        const foundAuthors = [];
        for (const authorName of authors) {
          const foundAuthor = await Author.findOne({
            where: {
              name: {
                [Op.iLike]: authorName.trim()
              }
            }
          });

          if (!foundAuthor) {
            // El autor no existe en la base de datos, crearlo
            const newAuthor = await Author.create({ name: authorName.trim() });
            foundAuthors.push(newAuthor);
          } else {
            foundAuthors.push(foundAuthor);
          }
        }

        await book.setAuthors(foundAuthors);
      }

      if (categories && categories.length > 0) {
        const foundCategories = [];
        for (const categoryName of categories) {
          const foundCategory = await Category.findOne({
            where: {
              name: {
                [Op.iLike]: categoryName.trim()
              }
            }
          });

          if (!foundCategory) {
            // La categoría no existe en la base de datos, crearla
            const newCategory = await Category.create({ name: categoryName.trim() });
            foundCategories.push(newCategory);
          } else {
            foundCategories.push(foundCategory);
          }
        }

        await book.setCategories(foundCategories);
      }
    }

    console.log('Autores y categorías asignados a los libros.');
    return createdBooks;
  } catch (error) {
    console.error('Error al crear los libros:', error);
  }
}

module.exports = bulkCreateBooks;