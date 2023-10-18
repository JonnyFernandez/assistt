import c from './CardDetailHistory.module.css'


const CardDetails_list = (props) => {
    return (
        <div className={c.card} >
            <div>Nombre: {props.name}</div>
            <div>Cantidad: {props.quanty}</div>

        </div>
    )
}

export default CardDetails_list