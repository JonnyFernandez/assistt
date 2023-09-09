const {createReview, getReview} = require('../../controllers/reviewCtrl/reviewCtrl')

const postReview = async (req, res) => {
    const {review, userId, codeOrder} = req.body;
    try {
        const newReview = await createReview(review, userId, codeOrder)
        res.status(201).json(newReview)

    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const getAllReview = async (req, res) => {
    try {
        const Review = await getReview()
        res.status(201).json(Review)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = { postReview, getAllReview }