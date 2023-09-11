import Nav from "../../components/nav/Nav"
import Nav1 from "../../components/nav/Nav1"
import s from './User1.module.css'
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { getProd } from '../../redux/actions'




const User1 = () => {

  const dispatch = useDispatch()
  let prod = useSelector(state => state.Product)

  useEffect(() => {

  }, [])



  return (
    <div  >
      <div>
        <Nav />
        <Nav1 />
      </div>

      <div className={s.bodyContainerUser1}>
        <div className={s.bodyLeft}></div>
        <div className={s.bodyRight}></div>





      </div>
      <div className={s.footerUser1}>

      </div>
    </div>
  )
}


export default User1