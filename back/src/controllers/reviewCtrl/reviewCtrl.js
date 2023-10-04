

const { Review, Orders, User } = require('../../db');


const createReview = async (review, userId, codeOrder) => {
  const user = await User.findByPk(userId);
  if (!user) {
    throw new Error('Usuario no encontrado');
  }

  const order = await Orders.findOne({ where: { codeOrder: codeOrder } });
  if (!order) { throw new Error(`No existe orden con este código "${codeOrder}"`) }

  const newReview = await Review.create({ review });
  await newReview.setOrder(order);

  await newReview.setUser(user);

  // switch (user.constructor) {
  //   case User1:
  //     await newReview.setUser1(user);
  //     break;
  //   case User2:
  //     await newReview.setUser2(user);
  //     break;
  //   case User3:
  //     await newReview.setUser3(user);
  //     break;
  //   case User4:
  //     await newReview.setUser4(user);
  //     break;
  //   default:
  //     throw new Error('Usuario no encontrado');
  // }

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