const { Book, Author, Category, Language } = require('../db');
const { Op } = require('sequelize');

async function bulkCreateBooks(books) {
  try {
    // Verificar y crear los idiomas necesarios
    const languageCodes = books.map(book => book.language);
    const uniqueLanguageCodes = [...new Set(languageCodes)]; // Obtener códigos de idioma únicos

    for (const languageCode of uniqueLanguageCodes) {
      await checkAndCreateLanguage(languageCode);
    }

    const createdBooks = await Book.bulkCreate(books);
    console.log('Libros creados:', createdBooks);

    // Asignar autores y categorías a los libros creados
    for (const book of createdBooks) {
      const { authors, categories } = book;

      if (authors && authors.length > 0) {
        const foundAuthors = [];
        for (const authorName of authors) {
          const foundAuthor = await Author.findOne({
            where: {
              name: {
                [Op.iLike]: authorName
              }
            }
          });

          if (!foundAuthor) {
            // El autor no existe en la base de datos, crearlo
            const newAuthor = await Author.create({ name: authorName });
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
                [Op.iLike]: categoryName
              }
            }
          });

          if (!foundCategory) {
            // La categoría no existe en la base de datos, crearla
            const newCategory = await Category.create({ name: categoryName });
            foundCategories.push(newCategory);
          } else {
            foundCategories.push(foundCategory);
          }
        }

        await book.setCategories(foundCategories);
      }
    }

    console.log('Autores y categorías asignados a los libros.');
  } catch (error) {
    console.error('Error al crear los libros:', error);
  }
}

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
    await Language.create({ IdLanguage: languageCode, language: languageName });
  }
}

module.exports = bulkCreateBooks;