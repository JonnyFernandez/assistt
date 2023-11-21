

const {getOrder} = require('../orderCrtl/orderCtrl')


const CountPro = async () => {
    const aux = await getOrder()
    if(aux.length<1) throw new Error('No tenemos ordenes registradas, no hay estadisticas de ventas')
    
    const allOrders = await aux.map(item=> item.Prods)
    
    let prodArr =  allOrders.flat()
    // return aux2

    const count = prodArr.reduce((acc, curr) => {
        if (curr.name in acc) {
          acc[curr.name]++;
        } else {
          acc[curr.name] = 1;
        }
        
        return acc;
      }, {});
     
      const repeated = [];
      for (let name in count) {
        if (count[name] >= 1) {
          repeated.push({ name, count: count[name] });
        }
      }
      return repeated

}


module.exports = CountPro

// const getIdRepetidos = async () => {
//     const allPurchase = await getAllPurchase()

//     if(allPurchase) throw new Error('No tenemos compra registradas, no hay estadisticas de ventas')
    
//     const allProduct = await allPurchase.map(item=> item.Prods)
    
//     let aux =  allProduct.flat()
   
//      const count = aux.reduce((acc, curr) => {
//         if (curr.name in acc) {
//           acc[curr.name]++;
//         } else {
//           acc[curr.name] = 1;
//         }
        
//         return acc;
//       }, {});
     
//       const repeated = [];
//       for (let name in count) {
//         if (count[name] >= 1) {
//           repeated.push({ name, count: count[name] });
//         }
//       }
//       return repeated


//      }