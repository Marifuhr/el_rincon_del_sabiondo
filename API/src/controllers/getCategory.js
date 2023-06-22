const { Category } = require('../db');

const getCategory = async () => {
  const category = await Category.findAll();
  return category;
};

module.exports = getCategory;
