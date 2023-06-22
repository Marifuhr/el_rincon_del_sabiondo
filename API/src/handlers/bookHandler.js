const bookController = require('../controllers/bookController');

exports.bulkCreateBooksHandler = (req, res) => {
  bookController.bulkCreateBooks(req, res);
};
