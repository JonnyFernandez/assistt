import Nav from "../../components/nav/Nav"
import Nav1 from "../../components/nav/Nav1"
import s from './User1.module.css'

const User1 = () => {


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