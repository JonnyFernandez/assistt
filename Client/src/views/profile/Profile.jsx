import {NavLink} from 'react-router-dom'

const Profile1 =()=>{
    return(
        <div>
            <NavLink to={'/user1'} >Back</NavLink>
            <h1>Perfil del usuario que este conectado</h1>
        </div>
    )
}


export default Profile1