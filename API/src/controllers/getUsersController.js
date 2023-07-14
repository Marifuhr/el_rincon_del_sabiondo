const { User, Selling, SellingTotal, Book, Review } = require('../db');

module.exports = async function () {

  try {
    const users = await User.findAll({
      include: [
        {
          model: SellingTotal,
          include: [
            {
              model: Selling,
              as: 'products'
            }
          ]
        },
        {
          model: Book,
          as: 'wichListBook'
        },
        {
          model: Review
        }
      ]
    });
    return users;
  } catch (error) {
    return { error: error.message };
  }
}