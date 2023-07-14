const { Router } = require ('express');
const routeReviewsHandler = require('../handlers/routeReviewsHandler');
const getReviewsHandler = require('../handlers/getReviewsHandler');
const routerReviews = Router();

console.log('routerReviews');
routerReviews.post('/', routeReviewsHandler);
routerReviews.get('/', getReviewsHandler);
routerReviews.get('/:IdReview', getReviewsHandler);

module.exports = routerReviews;

