const {Router} = require('express');
const { postReview, getAllReview } = require('../handlers/reviewHandler/reviewHandler')

const review = Router()

review.post('/', postReview)

//review.delete('/:id', removeReview)

review.get('/', getAllReview)

module.exports = review;