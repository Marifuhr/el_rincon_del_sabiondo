const { Author } = require('../db');

const getAllAuthors = async () => {
    const authors = await Author.findAll();
    return authors;
};

module.exports = getAllAuthors;