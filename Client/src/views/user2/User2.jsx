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
import EditProfile from '../../components/componentOfUser1/editProfile/EditProfile';


const User2 = () => {
    const auth = useAuth()
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const [addProd, setAddProd] = useState(false);
    const [assignament, setAssignament] = useState(false);
    const [auction, setAuction] = useState(true);
    const [orderUser2, setOrderUser2] = useState(false);
    const [prod, setProd] = useState(false);
    const [isEditProfile1ModalVisible, setEditProfile1ModalVisible] = useState(false);

    const handleEditProfileClick = () => {
        setEditProfile1ModalVisible(true);
    };

    const handleCloseEditProfileModal = () => {
        setEditProfile1ModalVisible(false);
    };

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

                <div className={u.bodyContainer}>
                    {addProd && <AddProd />}
                    {assignament && <Assignament />}
                    {auction && <Auction />}
                    {orderUser2 && <OrderUser2 />}
                    {prod && <Prod />}
                </div>
            </div>
            <div >
                {isEditProfile1ModalVisible && (
                    <div className={u.modalBackdrop}>
                        <EditProfile onClose={handleCloseEditProfileModal} />
                    </div>
                )}
            </div>


            <div className={u.divFooter}>
                <Footer />

            </div>
        </div>
    );
};

export default User2;
