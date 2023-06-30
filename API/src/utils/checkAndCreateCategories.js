const { Category } = require("../db");
const { Op } = require("sequelize");

const checkAndCreateCategories = async ({ category }) => {
  try {
    const foundCategories = await Category.findAll({
      where: {
        name: {
          [Op.in]: category.map(categoryName => categoryName.trim().toLowerCase()),
        },
      },
    });
    console.log(foundCategories);

    const existingCategoriesNames = foundCategories.map(category => category.name.toLowerCase());
    const newCategories = [];
    console.log(existingCategoriesNames)

    for (const categoryName of category) {
      const trimmedCategoryName = categoryName.trim();
      if (!existingCategoriesNames.includes(trimmedCategoryName.toLowerCase())) {
        newCategories.push({ name: trimmedCategoryName });
      }
    }
    console.log(newCategories)

    if (newCategories.length > 0) {
      await Category.bulkCreate(newCategories);
    }

    const allCategories = await Category.findAll({
      where: {
        name: {
          [Op.in]: category.map(categoryName => categoryName.trim().toLowerCase()),
        },
      },
    });
    console.log(allCategories);
    return allCategories;
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = checkAndCreateCategories;