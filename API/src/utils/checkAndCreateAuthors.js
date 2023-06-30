const { Author } = require("../db");
const { Op } = require("sequelize");

const checkAndCreateAuthors = async (authors) => {
  try {
    const foundAuthors = await Author.findAll({
      where: {
        name: {
          [Op.in]: authors.map(authorName => authorName.trim()),
        },
      },
    });

    const existingAuthorNames = foundAuthors.map(author => author.name.toLowerCase());
    const newAuthors = [];

    for (const authorName of authors) {
      const trimmedAuthorName = authorName.trim();
      if (!existingAuthorNames.includes(trimmedAuthorName.toLowerCase())) {
        newAuthors.push({ name: trimmedAuthorName });
      }
    }

    if (newAuthors.length > 0) {
      await Author.bulkCreate(newAuthors);
    }

    const allAuthors = await Author.findAll({
      where: {
        name: {
          [Op.in]: authors.map(authorName => authorName.trim()),
        },
      },
    });

    return allAuthors;
  } catch (error) {
    throw new Error('An error occurred while checking and creating authors.');
  }
}

module.exports = checkAndCreateAuthors;