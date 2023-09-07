const {User1, Review, Entity, Orders } = require('../../db')




const getAllUser1 = async() => {
  const aux = await User1.findAll({
    include: [
          {
              model: Review,
              as: 'Review1',
              attributes: ["review"]
          },
          {
              model: Entity,
              as: 'Entity',
              attributes: ["name"]
          },
          {
              model: Orders,
              as: 'Orders',
              attributes: ["codeOrder"]
          },
      ],

})
  return  aux;
}


const getByName1 = async(codeUser) => {
     const getOne = await User1.findAll({
      where:{usercode:codeUser},
      include: [
        {
            model: Review,
            as: 'Review1',
            attributes: ["review"]
        },
        {
            model: Entity,
            as: 'Entity',
            attributes: ["name"]
        },
        {
            model: Orders,
            as: 'Orders',
            attributes: ["codeOrder"]
        },
    ],
    })
     return   getOne;


 }


module.exports = {getAllUser1, getByName1}