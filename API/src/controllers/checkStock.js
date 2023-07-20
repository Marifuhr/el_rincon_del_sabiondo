const { Book } = require('../db');

module.exports = async function(products){
  try {
    for (let product of products) {
      const { IdBook, quantity } = product;

      const book = await Book.findByPk(IdBook);

      if (quantity > book.stock) {
        throw new Error(`Stock insuficiente del libro ${IdBook}`);
      }
    }
  } catch (error) {
    throw new Error(error);
  }
}