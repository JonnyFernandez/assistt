import Nav from '../../components/nav/Nav'
import Nav2 from '../../components/nav/Nav2'
import u from './User2.module.css'
import Footer from '../../components/footer/Footer'
const User2 = () => {
    return (
        <div >
            <div className='divHeader' >
                <Nav />
                <Nav2 />
            </div>

            <div className={u.body} >

            </div>

            <div className={u.divFooter}>
                <Footer />
            </div>









        </div>
    )
}


export default User2