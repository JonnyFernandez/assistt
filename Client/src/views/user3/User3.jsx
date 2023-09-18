import Nav from '../../components/nav/Nav'
import k from './User3.module.css'


const User3 = () => {
    return (
        <div >
            <div className={k.user3Header}>
                <div>
                    <Nav />
                </div>
            </div>
            <div className={k.user3Body}></div>
            <div className={k.user3Footer}></div>

        </div>
    )
}


export default User3