const { Category } = require("../db");
const { Op } = require("sequelize");

const checkAndCreateCategories = async (categories) => {
  try {
    const foundCategories = await Category.findAll({
      where: {
        name: {
          [Op.in]: categories.map(categoryName => categoryName.trim()),
        },
      },
    });

    const existingCategoriesNames = foundCategories.map(category => category.name.toLowerCase());
    const newCategories = [];

    for (const categoryName of categories) {
      const trimmedCategoryName = categoryName.trim();
      if (!existingCategoriesNames.includes(trimmedCategoryName.toLowerCase())) {
        newCategories.push({ name: trimmedCategoryName });
      }
    }

    if (newCategories.length > 0) {
      await Category.bulkCreate(newCategories);
    }

    const allCategories = await Category.findAll({
      where: {
        name: {
          [Op.in]: categories.map(categoryName => categoryName.trim()),
        },
      },
    });

    return allCategories;
  } catch (error) {
    throw new Error('An error occurred while checking and creating categories.');
  }
}

module.exports = checkAndCreateCategories;