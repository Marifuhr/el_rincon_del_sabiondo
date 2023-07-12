const { Review } = require("../db");

// Obtener la revisión por IdReview
const getReviewById = async (IdReview) => {
  try {
    const review = await Review.findByPk(IdReview);
    return review;
  } catch (error) {
    console.error("Error buscando Reviews por IdReview:", error);
    throw error;
  }
};

// Obtener las revisiones por IdBook
const getReviewsByBookId = async (IdBook) => {
  try {
    const reviews = await Review.findAll({
      where: {
        IdBook,
      },
    });
    return reviews;
  } catch (error) {
    console.error("Error buscando Reviews por IdBook:", error);
    throw error;
  }
};

// Obtener las revisiones por IdUser
const getReviewsByUserId = async (IdUser) => {
  try {
    const reviews = await Review.findAll({
      where: {
        IdUser,
      },
    });
    return reviews;
  } catch (error) {
    console.error("Error buscando Reviews por IdUser:", error);
    throw error;
  }
};

const getAllReviews = async () => {
  try {
    const reviews = await Review.findAll();
    return reviews;
  } catch (error) {
    console.error("Error buscando Reviews:", error);
    throw error;
  }
}

module.exports = {
  getReviewById,
  getReviewsByBookId,
  getReviewsByUserId,
  getAllReviews
};