// const { Review, User1, Orders, User2, User3, User4 } = require('../../db')

// const createReview = async (review, userId, codeOrder) => {

//   const user1 = await User1.findByPk(userId);
//   const user2 = await User2.findByPk(userId);
//   const user3 = await User3.findByPk(userId);
//   const user4 = await User4.findByPk(userId);


//   if (user1) {
//     const order = await Orders.findOne({ where: { codeOrder: codeOrder } });
//     if (!order) throw new Error(`No existe orden con este código "${codeOrder}"`);
//     const newReview = await Review.create({ review });
//     await newReview.setOrder(order);
//     await newReview.setUser1(user1);

//   } else if (user2) {
//     const order = await Orders.findOne({ where: { codeOrder: codeOrder } });
//     if (!order) throw new Error(`No existe orden con este código "${codeOrder}"`);
//     const newReview = await Review.create({ review });
//     await newReview.setOrder(order);
//     await newReview.setUser2(user2);
//   } else if (user3) {
//     const order = await Orders.findOne({ where: { codeOrder: codeOrder } });
//     if (!order) throw new Error(`No existe orden con este código "${codeOrder}"`);
//     const newReview = await Review.create({ review });
//     await newReview.setOrder(order);
//     await newReview.setUser3(user3);
//   } else if (user4) {
//     const order = await Orders.findOne({ where: { codeOrder: codeOrder } });
//     if (!order) throw new Error(`No existe orden con este código "${codeOrder}"`);
//     const newReview = await Review.create({ review });
//     await newReview.setOrder(order);
//     await newReview.setUser3(user4);
//   } else {
//     throw new Error('Usuario no encontrado');
//   }

//   return "hola Andrea"

// }

const { Review, Orders, User1, User2, User3, User4 } = require('../../db');

const getUserByPk = async (userId) => {
  const users = [User1, User2, User3, User4];
  for (const UserModel of users) {
    const user = await UserModel.findByPk(userId);
    if (user) return user;
  }
  return null;
};

const createReview = async (review, userId, codeOrder) => {
  const user = await getUserByPk(userId);
  if (!user) {
    throw new Error('Usuario no encontrado');
  }

  const order = await Orders.findOne({ where: { codeOrder: codeOrder } });
  if (!order) {
    throw new Error(`No existe orden con este código "${codeOrder}"`);
  }

  const newReview = await Review.create({ review });
  await newReview.setOrder(order);

  switch (user.constructor) {
    case User1:
      await newReview.setUser1(user);
      break;
    case User2:
      await newReview.setUser2(user);
      break;
    case User3:
      await newReview.setUser3(user);
      break;
    case User4:
      await newReview.setUser4(user);
      break;
    default:
      throw new Error('Usuario no encontrado');
  }

  return "Reseña Creada";
};


const getReview = async () => {
  const aux = await Review.findAll({
    include: [
        {
          model: User1,
          attributes: ["name", "usercode"]
        },
        {
          model: User2,
          attributes: ["name", "usercode"]
        },
        {
            model: User3,
            attributes: ["name", "usercode"]
        },
        {
          model: User4,
          attributes: ["name", "usercode"]
      },
    ]
})

  return aux
}

module.exports = { createReview, getReview }