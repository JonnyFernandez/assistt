

const { Review, Orders, User } = require('../../db');


const createReview = async (review, userId, codeOrder) => {
  // console.log(userId);
  const user = await User.findByPk(userId);
  if (!user) {
    throw new Error('Usuario no encontrado');
  }

  const order = await Orders.findOne({ where: { codeOrder: codeOrder } });
  if (!order) { throw new Error(`No existe orden con este código "${codeOrder}"`) }

  const newReview = await Review.create({ review });
  await newReview.setOrder(order);

  await newReview.setUser(user);


  return "Reseña Creada";
};


const getReview = async () => {
  const aux = await Review.findAll({
    include: [
      {
        model: User,
        attributes: ["name", "email"]
      },

    ]
  })

  return aux
}

module.exports = { createReview, getReview }