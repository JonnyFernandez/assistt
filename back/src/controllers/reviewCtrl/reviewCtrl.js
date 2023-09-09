const { Review, User1, Orders } = require('../../db')

const createReview = async (review, userId, codeOrder) => {
    const user = await User1.findByPk(userId);
    const order = await Orders.findOne({ where: { codeOrder: codeOrder } });
  
    if (!user) throw new Error(`No existe usuario con este código "${userId}"`);
    if (!order) throw new Error(`No existe orden con este código "${codeOrder}"`);
  
    const newReview = await Review.create({ review });
  
    // Asocia la reseña a la orden
    await newReview.setOrder(order);
  
    return "Reseña exitosa";
  }
 
  
const getReview = () => {

}

module.exports = {createReview, getReview}