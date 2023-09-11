import h from './Landing.module.css'
import { NavLink } from 'react-router-dom'


const Landing =()=>{
    return(
        <div className={h.Landing} >

          <div className={h.container}>
             

         <div className={h.titleContainer}>
            <div className={h.title}>Assistt-One</div>
         </div>
          
          <div className={h.linkContainer} >
            <NavLink className={h.link} to="/user1">salud</NavLink>
            <NavLink className={h.link} to="/user2">revisor</NavLink>
            <NavLink className={h.link} to="/user3">admin</NavLink>
            <NavLink className={h.link} to="/user4">proveedor</NavLink>
          </div>

          </div> 



        </div>
    )
}


export default Landing