
import p from './Nav.module.css'
import { useState } from 'react';

const Nav2 = ({ selector }) => {
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const showSidebar = () => {
        setSidebarVisible(true);
    };

    const hideSidebar = () => {
        setSidebarVisible(false);
    };
    const handleEditProfileClick = () => {
        setEditProfile1ModalVisible(true);
    };
    function handleSingOut() {
        Swal.fire({
            title: '¿Estás seguro?',
            text: '¡Tu sesión actual se cerrará!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, cerrar sesión',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                auth.signOut()
                Swal.fire('¡Sesión cerrada!', 'Tu sesión ha sido cerrada correctamente.', 'success');
            }
        });
    }


    return (


        <div className={p.nav2Container}  >
            {/* <button className={p.sidebarButton} onMouseOver={showSidebar} onMouseOut={hideSidebar}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                    <path d="M2 1.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zM2 6.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zM2 11.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                </svg>
            </button> */}

            <button className="btn btn-primary" value={""}  >Menu</button>
            <button className="btn btn-primary" value={"auction"} onClick={(e) => selector(e.target.value)} >Ordenes</button>
            <button className="btn btn-primary" value={"assignament"} onClick={(e) => selector(e.target.value)}>Asignación</button>
            <button className="btn btn-primary" value={"addProd"} onClick={(e) => selector(e.target.value)}>Agregar Productos</button>
            <button className="btn btn-primary" value={"prod"} onClick={(e) => selector(e.target.value)}>Productos</button>
            <button className="btn btn-primary" value={"orderUser2"} onClick={(e) => selector(e.target.value)}>Despacho</button>
            <button className="btn btn-primary" value={"orderUser2"} onClick={(e) => selector(e.target.value)}>Historial</button>

            {/* {sidebarVisible && (
                <div className={p.sidebar} onMouseOver={showSidebar} onMouseOut={hideSidebar}>
                    <button onClick={handleEditProfileClick}>Ver Perfil/Editar</button>
                    <button onClick={handleSingOut}>Log Out</button>
                </div>
            )} */}


        </div>
    )
}


export default Nav2