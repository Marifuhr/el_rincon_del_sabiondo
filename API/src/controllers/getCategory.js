const { Category } = require('../db');

const getCategory = async () => {
  const response = await Category.findAll();
  return response;
};

module.exports = getCategory;
