import v from './CardOrderCtrl.module.css'



const CardOrderCtrl = (props) => {

    const sendOrder = () => {
        alert("despacha la order")
    }
    const cancelOrder = () => {
        alert('cancela todo')
    }

    return (
        <div className={v.cardCtrl}>
            <div className={v.header}>Aprobada</div>
            <div className={v.body}>
                <div>Fecha: {props.date ? props.date : "aaaa - mm - dd"} </div>
                <div>Orden: {props.codeOrder ? props.codeOrder : 'AL-1111'} </div>
            </div>

            <div className={v.footer}>
                <div className={v.sendBut} onClick={() => sendOrder()}>Despachar</div>
                <div className={v.cancelBut} onClick={() => cancelOrder()}>Cancelar</div>
            </div>

        </div>
    )
}



export default CardOrderCtrl