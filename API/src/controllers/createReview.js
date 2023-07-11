const { Book, User, Review } = require('../db');

module.exports = async function ({ IdUser, IdBook, rate, description }) {
  try {
    const userExist = await User.findOne({ where: { email: IdUser } });
    const bookExist = await Book.findByPk(IdBook);
    
   if (userExist && bookExist) {
     const newReview = await Review.create({
       IdUser : userExist.IdUser,
       IdBook,
       rate,
       description
     })
     return newReview
   } else {
    if (!userExist) {
      return { error: 'User does not exist' };
    } else {
      if (!bookExist) {
        return { error: 'Book does not exist' };
      }      
    }
   }
  } catch (error) {
    return { error: error.message };
  }
}