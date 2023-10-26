import u from './CardHistoryOrder.module.css'




const CardHistoryOrder = ({ id, code, date, status, providerC, OnClick }) => {


    let Current_status = status === true ? "Aprobado" : status === false ? "Desaprobado" : status === null ? "Pendiente" : ''


    return (
        <div className={`${u.card} ${Current_status === "Aprobado" ? u.aprobado : Current_status === "Desaprobado" ? u.desaprobado : Current_status === "Pendiente" ? u.send : ''}`} onClick={OnClick}>

            <div key={id}>
                <div>{code}</div>
            </div>





        </div>
    )
}

export default CardHistoryOrder