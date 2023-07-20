const { Book } = require('../db');

module.exports = async function(products){
  try {
    for (const product of products) {
      const { IdProduct, quantity } = product;

      //console.log(product)
  
      const book = await Book.findOne({ where: { IdBook: IdProduct } });

      //console.log(book)
  
      await book.update({ stock: book.stock - quantity });

      
    }
  
  } catch (error) {
    throw new Error(error.message);
  }
}