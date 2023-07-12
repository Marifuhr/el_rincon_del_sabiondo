const reviewController = require("../controllers/getReviews");

// Controlador para obtener la revisión por IdReview, IdBook o IdUser
const getReview = async (req, res) => {
  console.log('entro al getReview')
  const { IdReview } = req.params;
  const { IdBook, IdUser } = req.query;

  try {
    let reviews;

    if (IdReview) {
      // Obtener la revisión por IdReview
      const review = await reviewController.getReviewById(IdReview);

      // Verificar si se encontró la revisión
      if (!review) {
        return res.status(404).json({ error: "No existe Review con ese Id" });
      }

      return res.status(200).json(review);
    } else if (IdBook || IdUser) {
      if (IdBook) {
        // Obtener las revisiones por IdBook
        reviews = await reviewController.getReviewsByBookId(IdBook);
      } else if (IdUser) {
        // Obtener las revisiones por IdUser
        reviews = await reviewController.getReviewsByUserId(IdUser);
      }} else {
        // Obtener todas las revisiones
        reviews = await reviewController.getAllReviews();
      }
      return res.status(200).json(reviews);
  } catch (error) {
    console.error("Error buscando Reviews:", error);
    return res.status(500).json({ error: "Error de servidor" });
  }
};

module.exports = getReview;