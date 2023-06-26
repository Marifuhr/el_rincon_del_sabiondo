const { Book } = require("../db");
const { Op } = require("sequelize");
const checkAndCreateLanguage = require("../utils/checkAndCreateLanguage");
const checkAndCreateAuthors = require("../utils/checkAndCreateAuthors");
const checkAndCreateCategories = require("../utils/checkAndCreateCategories");
const validator = require("../utils/validator");


async function bulkCreateBooks(books) {
  //console.log(books);
  try {
    // Verificar y crear los idiomas necesarios
    const languageCodes = books.map((book) => book.language);
    const uniqueLanguageCodes = [...new Set(languageCodes)]; // Obtener códigos de idioma únicos

    for (const languageCode of uniqueLanguageCodes) {
      await checkAndCreateLanguage(languageCode);
    }

    let filteredbooks = [];
    books.forEach(element => {
      const { errors } = validator(element);
      if (errors.length > 0) {
        return errors;
      }
    });
    for (const book of books) {
      const foundbook = await Book.findOne({
        where: {
          title: {
            [Op.iLike]: book.title,
          },
        },
      });

      if (!foundbook) {
        filteredbooks.push(book);
      }
    }

    const createdBooks = await Book.bulkCreate(filteredbooks);
    console.log("Libros creados:", createdBooks);

    // Asignar autores y categorías a los libros creados
    for (const book of createdBooks) {
      let temp = books.find((raw) => raw.title === book.title);

      let authors = temp.authors;
      let categories = temp.categories;
      console.log({ authors, categories });

      if (authors && authors.length > 0) {
        try {
          const filteredAuthors = await checkAndCreateAuthors();
          if (filteredAuthors) {
            await book.setAuthors(filteredAuthors);
          }
        } catch (error) {
          throw new Error({ error : error.message })
        }
      }

      if (categories && categories.length > 0) {
        try {
          const filteredCategories = await checkAndCreateCategories();
          if (filteredCategories) {
            await book.setCategories(filteredCategories);
          }
        } catch (error) {
          throw new Error({ error : error.message })
        }
      }
    }

    console.log("Autores y categorías asignados a los libros.");
    return createdBooks;
  } catch (error) {
    console.error("Error al crear los libros:", error);
  }
}

module.exports = bulkCreateBooks;
