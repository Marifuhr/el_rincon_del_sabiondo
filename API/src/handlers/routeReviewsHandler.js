const createReview = require('../controllers/createReview');
const validate = require('../utils/reviewValidator');

module.exports = async function (req, res) {
  try {
    const { IdUser, IdBook, rate, description } = req.body;
    console.log(IdUser, IdBook, rate, description);
    await validate({ IdUser, IdBook, rate, description });
    const newReview = await createReview({ IdUser, IdBook, rate, description });
    if(newReview.error) {
      return res.status(400).json(newReview.error);
    }
    res.status(200).json({ newReview });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}