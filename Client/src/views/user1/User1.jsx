import Nav from "../../components/nav/Nav"
import Nav1 from "../../components/nav/Nav1"
import s from './User1.module.css'
import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { getProd, prodByType, setCartItems, setFavItems } from '../../redux/actions'
import Card from "../../components/card/Card"
import Footer from '../../components/footer/Footer'

const User1 = () => {

  const dispatch = useDispatch()
  let prodState = useSelector(state => state.Product)
  let prod = prodState.filter(item => item.stock !== 0)

  console.log(prod);
  useEffect(() => {
    dispatch(getProd())
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const storedFav = JSON.parse(localStorage.getItem('fav')) || [];
    dispatch(setCartItems(storedCart));
    dispatch(setFavItems(storedFav))
  }, [dispatch])


  const changeToOtros = () => {
    dispatch(prodByType('otros'))

  };
  const changeToAlmacen = () => {
    dispatch(prodByType('almacen'))

  };
  const changeToLibreria = () => {
    dispatch(prodByType('libreria'))

  };
  const changeToMedicos = () => {
    dispatch(prodByType('medico'))

  };
  const changeToLimpieza = () => {
    dispatch(prodByType('limpieza'))

  };

  const handlerRefresh = () => {
    dispatch(getProd())

  };


  return (

    <div className={s.user1}>
      <div className={s.header}>
        <Nav />
        <Nav1 />
      </div>
      <div className={s.body}>
        <div className={s.bodyLeft} >

          <div className={s.entradablog} onClick={handlerRefresh}>

            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
              <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
            </svg>
            <div>Restablecer</div>

          </div>



          <div className={s.entradablog} onClick={changeToAlmacen} value='almacen'>

            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-shop" viewBox="0 0 16 16">
              <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z" />
            </svg>
            <div>Insumos Almacen</div>

          </div>

          <div className={s.entradablog} onClick={changeToLibreria}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-collection" viewBox="0 0 16 16">
              <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13z" />
            </svg>
            <div>Insumos Libreria</div>
          </div>

          <div className={s.entradablog} onClick={changeToMedicos} value='medico'>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-hospital" viewBox="0 0 16 16">
              <path d="M8.5 5.034v1.1l.953-.55.5.867L9 7l.953.55-.5.866-.953-.55v1.1h-1v-1.1l-.953.55-.5-.866L7 7l-.953-.55.5-.866.953.55v-1.1h1ZM13.25 9a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5ZM13 11.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5Zm.25 1.75a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5Zm-11-4a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5A.25.25 0 0 0 3 9.75v-.5A.25.25 0 0 0 2.75 9h-.5Zm0 2a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5ZM2 13.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5Z" />
              <path d="M5 1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1a1 1 0 0 1 1 1v4h3a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h3V3a1 1 0 0 1 1-1V1Zm2 14h2v-3H7v3Zm3 0h1V3H5v12h1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3Zm0-14H6v1h4V1Zm2 7v7h3V8h-3Zm-8 7V8H1v7h3Z" />
            </svg>
            <div>Insumos Medicos</div>
          </div>

          <div className={s.entradablog} onClick={changeToLimpieza}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-stars" viewBox="0 0 16 16">
              <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z" />
            </svg>
            <div>Insumos Limpieza</div>
          </div>
          <div className={s.entradablog} onClick={changeToOtros} value='otros'>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-emoji-smile-upside-down" viewBox="0 0 16 16">
              <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0-1a8 8 0 1 1 0 16A8 8 0 0 1 8 0z" />
              <path d="M4.285 6.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 4.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 3.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 9.5C7 8.672 6.552 8 6 8s-1 .672-1 1.5.448 1.5 1 1.5 1-.672 1-1.5zm4 0c0-.828-.448-1.5-1-1.5s-1 .672-1 1.5.448 1.5 1 1.5 1-.672 1-1.5z" />
            </svg>
            <div>Otros</div>
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
      <Footer />




    </div>



    // -------------------------------------------------------------------
    // <div  >
    //   <div>
    //     <Nav />
    //     <Nav1 />
    //   </div>

    //   <div className={s.bodyContainerUser1}>
    // <div className={s.bodyLeft}>
    //   <div className={s.contenedor}>

    //     <div className={s.entradablog} >

    //       <div className={s.icono2}>
    //         <svg className={s.icono} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message-2-share" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" strokeLinejoin="round">
    //           <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    //           <path d="M8 9h8" />
    //           <path d="M8 13h6" />
    //           <path d="M12 21l-3 -3h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6" />
    //           <path d="M16 22l5 -5" />
    //           <path d="M21 21.5v-4.5h-4.5" />
    //         </svg>
    //       </div>
    //       <button className={s.insuboton} onClick={handlerRefresh} value=''>Restablecer</button>

    //     </div>



    //     <div className={s.entradablog} onClick={handlerchange} value='almacen'>

    //       <div className={s.icono2}>
    //         <svg className={s.icono} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-salad" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" strokeLinejoin="round">
    //           <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    //           <path d="M4 11h16a1 1 0 0 1 1 1v.5c0 1.5 -2.517 5.573 -4 6.5v1a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-1c-1.687 -1.054 -4 -5 -4 -6.5v-.5a1 1 0 0 1 1 -1z" />
    //           <path d="M18.5 11c.351 -1.017 .426 -2.236 .5 -3.714v-1.286h-2.256c-2.83 0 -4.616 .804 -5.64 2.076" />
    //           <path d="M5.255 11.008a12.204 12.204 0 0 1 -.255 -2.008v-1h1.755c.98 0 1.801 .124 2.479 .35" />
    //           <path d="M8 8l1 -4l4 2.5" />
    //           <path d="M13 11v-.5a2.5 2.5 0 1 0 -5 0v.5" />
    //         </svg>
    //       </div>
    //       <button className={s.insuboton} onClick={handlerchange} value='almacen' >Insumos Almacen</button>
    //     </div>

    //     <article className={s.entradablog}>
    //       <div className={s.icono2}>
    //         <svg className={s.icono} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-settings-2" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" strokeLinejoin="round">
    //           <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    //           <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z" />
    //           <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    //         </svg>
    //       </div>
    //       <button className={s.insuboton} onClick={handlerchange} value='libreria'>Insumos Libreria</button>
    //     </article>

    //     <article className={s.entradablog}>
    //       <div className={s.icono2}>
    //         <svg className={s.icono} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-report-medical" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" strokeLinejoin="round">
    //           <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    //           <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
    //           <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
    //           <path d="M10 14l4 0" />
    //           <path d="M12 12l0 4" />
    //         </svg>
    //       </div>
    //       <button className={s.insuboton} onClick={handlerchange} value='medico'>Insumos Medicos</button>
    //     </article>

    //     <article className={s.entradablog}>
    //       <div className={s.icono2}>
    //         <svg className={s.icono} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-wiper-wash" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" strokeLinejoin="round">
    //           <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    //           <path d="M12 20m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    //           <path d="M3 11l5.5 5.5a5 5 0 0 1 7 0l5.5 -5.5a12 12 0 0 0 -18 0" />
    //           <path d="M12 20l0 -14" />
    //           <path d="M4 6a4 4 0 0 1 .4 -1.8" />
    //           <path d="M7 2.1a4 4 0 0 1 2 0" />
    //           <path d="M12 6a4 4 0 0 0 -.4 -1.8" />
    //           <path d="M12 6a4 4 0 0 1 .4 -1.8" />
    //           <path d="M15 2.1a4 4 0 0 1 2 0" />
    //           <path d="M20 6a4 4 0 0 0 -.4 -1.8" />
    //         </svg>
    //       </div>
    //       <button className={s.insuboton} onClick={handlerchange} value='limpieza'>Insumos Limpieza</button>
    //     </article>
    //     <article className={s.entradablog}>
    //       <div className={s.icono2}>
    //         <svg className={s.icono} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-wiper-wash" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
    //           <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    //           <path d="M12 20m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    //           <path d="M3 11l5.5 5.5a5 5 0 0 1 7 0l5.5 -5.5a12 12 0 0 0 -18 0" />
    //           <path d="M12 20l0 -14" />
    //           <path d="M4 6a4 4 0 0 1 .4 -1.8" />
    //           <path d="M7 2.1a4 4 0 0 1 2 0" />
    //           <path d="M12 6a4 4 0 0 0 -.4 -1.8" />
    //           <path d="M12 6a4 4 0 0 1 .4 -1.8" />
    //           <path d="M15 2.1a4 4 0 0 1 2 0" />
    //           <path d="M20 6a4 4 0 0 0 -.4 -1.8" />
    //         </svg>
    //       </div>
    //       <button className={s.insuboton} onClick={handlerchange} value='otros'>Otros</button>
    //     </article>
    //   </div>
    // </div>

    // <div className={s.bodyRight}>
    // {
    //   prod && prod.map(item => {
    //     return (
    //       <Card key={item.id} id={item.id} code={item.code} name={item.name} description={item.description} quanty={item.quanty} price={item.price} stock={item.stock} type={item.supplie_type} />
    //     )
    //   })
    // }

    // </div>





    //   </div>
    //   <div className={s.footerUser1}>
    //     <Footer />
    //   </div>
    // </div>
  )
}


export default User1
