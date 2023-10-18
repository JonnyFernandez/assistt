import Nav from "../../components/nav/Nav"
import Nav1 from "../../components/nav/Nav1"
import s from './User1.module.css'
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { getProd, prodByType } from '../../redux/actions'
import Card from "../../components/card/Card"
// import { NavLink } from "react-router-dom"


const User1 = () => {

  const dispatch = useDispatch()
  let prod = useSelector(state => state.Product)

  // console.log(prod);

  useEffect(() => {
    dispatch(getProd())
  }, [])


  const handlerchange = (e) => {
    dispatch(prodByType(e.target.value))

  };
  const handlerRefresh = (e) => {
    dispatch(getProd())

  };


  return (
    <div  >
      <div>
        <Nav />
        <Nav1 />
      </div>

      <div className={s.bodyContainerUser1}>
        <div className={s.bodyLeft}>
          <div className={s.contenedor}>

            <div className={s.entradablog} >

              <div className={s.icono2}>
                <svg className={s.icono} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message-2-share" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M8 9h8" />
                  <path d="M8 13h6" />
                  <path d="M12 21l-3 -3h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6" />
                  <path d="M16 22l5 -5" />
                  <path d="M21 21.5v-4.5h-4.5" />
                </svg>
              </div>
              {/* <NavLink> Restablecer </NavLink> */}
              <button className={s.insuboton} onClick={handlerRefresh} value=''>Restablecer</button>

            </div>

            <div className={s.entradablog}  >
              <div className={s.icono2}>
                <svg className={s.icono} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-access-point" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 12l0 .01" />
                  <path d="M14.828 9.172a4 4 0 0 1 0 5.656" />
                  <path d="M17.657 6.343a8 8 0 0 1 0 11.314" />
                  <path d="M9.168 14.828a4 4 0 0 1 0 -5.656" />
                  <path d="M6.337 17.657a8 8 0 0 1 0 -11.314" />
                </svg>
              </div>
              {/* <a >Editar Pedido</a> */}
              <button className={s.insuboton}>Editar Pedido</button>
            </div>

            <div className={s.entradablog} onClick={handlerchange} value='almacen'>

              <div className={s.icono2}>
                <svg className={s.icono} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-salad" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 11h16a1 1 0 0 1 1 1v.5c0 1.5 -2.517 5.573 -4 6.5v1a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-1c-1.687 -1.054 -4 -5 -4 -6.5v-.5a1 1 0 0 1 1 -1z" />
                  <path d="M18.5 11c.351 -1.017 .426 -2.236 .5 -3.714v-1.286h-2.256c-2.83 0 -4.616 .804 -5.64 2.076" />
                  <path d="M5.255 11.008a12.204 12.204 0 0 1 -.255 -2.008v-1h1.755c.98 0 1.801 .124 2.479 .35" />
                  <path d="M8 8l1 -4l4 2.5" />
                  <path d="M13 11v-.5a2.5 2.5 0 1 0 -5 0v.5" />
                </svg>
              </div>
              {/* <NavLink>Insumos Almacen</NavLink> */}
              <button className={s.insuboton} onClick={handlerchange} value='almacen' >Insumos Almacen</button>
            </div>

            <article className={s.entradablog}>
              <div className={s.icono2}>
                <svg className={s.icono} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-settings-2" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z" />
                  <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                </svg>
              </div>
              {/* <a href="#">Insumos Libreria</a> */}
              <button className={s.insuboton} onClick={handlerchange} value='libreria'>Insumos Libreria</button>
            </article>

            <article className={s.entradablog}>
              <div className={s.icono2}>
                <svg className={s.icono} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-report-medical" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
                  <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
                  <path d="M10 14l4 0" />
                  <path d="M12 12l0 4" />
                </svg>
              </div>
              {/* <a href="#">Insumos Medicos</a> */}
              <button className={s.insuboton} onClick={handlerchange} value='medico'>Insumos Medicos</button>
            </article>

            <article className={s.entradablog}>
              <div className={s.icono2}>
                <svg className={s.icono} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-wiper-wash" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 20m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                  <path d="M3 11l5.5 5.5a5 5 0 0 1 7 0l5.5 -5.5a12 12 0 0 0 -18 0" />
                  <path d="M12 20l0 -14" />
                  <path d="M4 6a4 4 0 0 1 .4 -1.8" />
                  <path d="M7 2.1a4 4 0 0 1 2 0" />
                  <path d="M12 6a4 4 0 0 0 -.4 -1.8" />
                  <path d="M12 6a4 4 0 0 1 .4 -1.8" />
                  <path d="M15 2.1a4 4 0 0 1 2 0" />
                  <path d="M20 6a4 4 0 0 0 -.4 -1.8" />
                </svg>
              </div>
              {/* <a href="#">Insumos Limpieza</a> */}
              <button className={s.insuboton} onClick={handlerchange} value='limpieza'>Insumos Limpieza</button>
            </article>
            <article className={s.entradablog}>
              <div className={s.icono2}>
                <svg className={s.icono} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-wiper-wash" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 20m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                  <path d="M3 11l5.5 5.5a5 5 0 0 1 7 0l5.5 -5.5a12 12 0 0 0 -18 0" />
                  <path d="M12 20l0 -14" />
                  <path d="M4 6a4 4 0 0 1 .4 -1.8" />
                  <path d="M7 2.1a4 4 0 0 1 2 0" />
                  <path d="M12 6a4 4 0 0 0 -.4 -1.8" />
                  <path d="M12 6a4 4 0 0 1 .4 -1.8" />
                  <path d="M15 2.1a4 4 0 0 1 2 0" />
                  <path d="M20 6a4 4 0 0 0 -.4 -1.8" />
                </svg>
              </div>
              {/* <a href="#">Insumos Limpieza</a> */}
              <button className={s.insuboton} onClick={handlerchange} value='otros'>Otros</button>
            </article>
          </div>
        </div>

        <div className={s.bodyRight}>
          {
            prod && prod.map(item => {
              return (
                <Card key={item.id} id={item.id} code={item.code} name={item.name} description={item.description} quanty={item.quanty} price={item.price} stock={item.stock} type={item.supplie_type} />
              )
            })
          }

        </div>





      </div>
      <div className={s.footerUser1}>
        <footer> Assistt one - Todos los derechos reservados 2023®.</footer>
      </div>
    </div>
  )
}


export default User1