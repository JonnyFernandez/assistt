import React, { useState } from 'react';
import Nav from '../../components/nav/Nav';
import Nav2 from '../../components/nav/Nav2';
import u from './User2.module.css';
import Footer from '../../components/footer/Footer';
import Swal from 'sweetalert2';
import { useAuth } from '../../authAll/auth/AuthProvider';
import AddProd from '../../components/componentUser2/addProd/AddProd'
import Assignament from '../../components/componentUser2/assignament/Assignament'
import Auction from '../../components/componentUser2/auction/Auction';
import OrderUser2 from '../../components/componentUser2/ordersUser2/OrdersUser2';
import Prod from '../../components/componentUser2/prod/Prod';



const User2 = () => {
    const auth = useAuth()
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const [addProd, setAddProd] = useState(false);
    const [assignament, setAssignament] = useState(false);
    const [auction, setAuction] = useState(true);
    const [orderUser2, setOrderUser2] = useState(false);
    const [prod, setProd] = useState(false);

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

    const selector = (selected) => {
        switch (selected) {
            case "prod":
                setAddProd(false);
                setAssignament(false);
                setAuction(false);
                setOrderUser2(false);
                setProd(true);
                break;
            case "orderUser2":
                setAddProd(false);
                setAssignament(false);
                setAuction(false);
                setOrderUser2(true);
                setProd(false);
                break;
            case "addProd":
                setAddProd(true);
                setAssignament(false);
                setAuction(false);
                setOrderUser2(false);
                setProd(false);
                break;
            case "assignament":
                setAddProd(false);
                setAssignament(true);
                setAuction(false);
                setOrderUser2(false);
                setProd(false);
                break;
            case "auction":
                setAddProd(false);
                setAssignament(false);
                setAuction(true);
                setOrderUser2(false);
                setProd(false);
                break;
            default:
                break;
        }
    }




    return (
        <div className={u.user2}>
            <div className={u.header}>
                <Nav />
                <Nav2 selector={selector} />
            </div>


            <div className={u.body}>
                <div className={u.menu}>
                    <button className={u.sidebarButton} onMouseOver={showSidebar} onMouseOut={hideSidebar}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
                            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
                        </svg>
                    </button>
                    {sidebarVisible && (
                        <div className={u.sidebar} onMouseOver={showSidebar} onMouseOut={hideSidebar}>
                            <button onClick={() => alert('Perfil clicado')}>Perfil</button>
                            <button onClick={() => alert('Pepe clicado')}>Editar Perfil</button>
                            <button onClick={() => alert('Notificaciones clicadas')}>Notificaciones</button>
                            <button onClick={() => alert('Pepe clicado')}>Pepe</button>
                            <button onClick={() => alert('Pepe clicado')}>calamardo</button>
                            <button onClick={() => alert('Pepe clicado')}>patricio</button>
                            <button onClick={handleSingOut}>Log Out</button>
                        </div>
                    )}
                </div>
                <div className={u.bodyContainer}>
                    {addProd && <AddProd />}
                    {assignament && <Assignament />}
                    {auction && <Auction />}
                    {orderUser2 && <OrderUser2 />}
                    {prod && <Prod />}
                </div>



            </div>


            <div className={u.divFooter}>
                <Footer />

            </div>
        </div>
    );
};

export default User2;
