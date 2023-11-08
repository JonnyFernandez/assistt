import React, { useState } from 'react';
import Nav from '../../components/nav/Nav';
import Nav2 from '../../components/nav/Nav2';
import u from './User2.module.css';
import Footer from '../../components/footer/Footer';
import Swal from 'sweetalert2';
import { useAuth } from '../../authAll/auth/AuthProvider';

const User2 = () => {
    const auth = useAuth()
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const [home, setHome] = useState(false);

    const showSidebar = () => {
        setSidebarVisible(true);
    };

    const hideSidebar = () => {
        setSidebarVisible(false);
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
        <div>
            <div className='divHeader'>
                <Nav />
                <Nav2 />
            </div>

            <button className={u.sidebarButton} onMouseOver={showSidebar} onMouseOut={hideSidebar}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
                </svg>
            </button>

            {sidebarVisible && (
                <div className={u.sidebar} onMouseOver={showSidebar} onMouseOut={hideSidebar}>
                    <button onClick={() => alert('Perfil clicado')}>Perfil</button>
                    <button onClick={() => alert('Notificaciones clicadas')}>Notificaciones</button>
                    <button onClick={handleSingOut}>Log Out</button>
                    <button onClick={() => alert('Pepe clicado')}>Pepe</button>
                </div>
            )}
            <div className={u.body}>
                {
                    home && <div>
                        <div>hola</div>
                        <div>hola</div>
                        <div>hola</div>
                        <div>hola</div>
                        <div>hola</div>
                    </div>
                }
            </div>


            <div className={u.divFooter}>
                <Footer />
            </div>
        </div>
    );
};

export default User2;
