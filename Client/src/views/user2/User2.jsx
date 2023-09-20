import Nav from '../../components/nav/Nav'
import Nav2 from '../../components/nav/Nav2'
import u from './User2.module.css'

const User2 = () => {
    return (
        <div >
            <div className='divHeader' >
                <Nav />
                <Nav2 />
            </div>

            <div className={u.bodyContainerUser2} >

                <div className={u.body} >

                    <div className={u.bodyLeft}>
                        <h3>FILTROS</h3>
                        <label htmlFor="">ESTADO</label>
                        <select>
                            <option value="">PEDIDOS</option>
                            <option value="">APROBADOS </option>
                            <option value="">RECHAZADOS</option>
                        </select>
                        <label htmlFor="">CATEGORIA</label>

                        <select>

                            <option value="">LIBRERIA</option>
                            <option value="">MEDICOS </option>
                            <option value="">ALMACEN</option>
                            <option value="">LIMPIEZA</option>
                        </select>
                        <label htmlFor="">PENDIENTES</label>
                        <select>
                            <option value="">PENDIENTES</option>
                            <option value="">NUN ORDEN</option>
                            <option value="">NUN ORDEN </option>
                            <option value="">NUN ORDEN</option>
                            <option value="">NUN ORDEN</option>
                        </select>

                    </div>

                    <div className={u.bodyRight}>

                        <div className={u.bodyRightList}>
                            <div className={u.ListHead}>
                                <button>Restablecer</button>
                                <h2>Lista</h2>
                            </div>
                            <div className={u.ListBody}></div>
                        </div>



                        <div className={u.bodyRightInfo}>
                            <div className={u.headerInfo}></div>
                            <div className={u.headerBody}></div>
                        </div>
                    </div>

                </div>

            </div>






            <div className={u.divFooter}></div>




        </div>
    )
}


export default User2