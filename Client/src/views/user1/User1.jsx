import Nav from "../../components/nav/Nav"
import Nav1 from "../../components/nav/Nav1"
import s from './User1.module.css'
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { getProd } from '../../redux/actions'
import Card from "../../components/card/Card"



const User1 = () => {

  const dispatch = useDispatch()
  let prod = useSelector(state => state.Product)

  useEffect(() => {
    dispatch(getProd())
  }, [])

  // console.log(prod);

  return (
    <div  >
      <div>
        <Nav />
        <Nav1 />
      </div>

      <div className={s.bodyContainerUser1}>
        <div className={s.bodyLeft}></div>

        <div className={s.bodyRight}>
          {
            prod && prod.map(item => {
              return (
                <Card key={item.id} id={item.id} code={item.code} name={item.name} description={item.description} quanty={item.quanty} price={item.price} />
              )
            })
          }

        </div>





      </div>
      <div className={s.footerUser1}>

      </div>
    </div>
  )
}


export default User1