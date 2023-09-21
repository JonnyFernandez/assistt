import { NavLink } from 'react-router-dom'
import p from './Nav.module.css'
import { getUser1 } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

const Nav = () => {

    const dispatch = useDispatch()
    const myProf = useSelector((state) => state.profile)

    useEffect(() => {
        dispatch(getUser1())
    }, [dispatch])


    return (
        <div className={p.navContainer} >
            <NavLink className={p.logo} to={'/'} >
                <img className={p.logo} to={'/'} src="/logo3.png" alt="logo" />
            </NavLink>
            {/* <NavLink className={p.perfil} to={'/Profile1'}>
                {myProf ? myProf[0].name : 'Perfil'}
            </NavLink> */}

        </div>
    )
}

export default Nav