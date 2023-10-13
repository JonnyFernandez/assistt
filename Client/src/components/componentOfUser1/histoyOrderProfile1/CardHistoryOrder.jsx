import u from './CardHistoryOrder.module.css'
import { NavLink, Link } from 'react-router-dom';




const CardHistoryOrder = ({ id, code, date, status, providerC, OnClick }) => {

    let Current_status = '';
    if (status === null) Current_status = "Enviado";
    if (status === true) Current_status = "Aprobado";
    if (status === false) Current_status = "Desaprobado";
    // console.log(id);

    return (
        <div className={u.card} onClick={OnClick}>

            <div className={u.item} onClick={OnClick}>
                <div>{code}</div>
            </div>

            <div className={u.item} onClick={OnClick}>
                <div>{date}</div>
            </div>

            <div className={u.item} onClick={OnClick}>
                <div> {Current_status} </div>
            </div>




        </div>
    )
}

export default CardHistoryOrder