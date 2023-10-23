import c from './CardDetailHistory.module.css'


const CardDetails_list = (props) => {
    return (
        <div className={c.card} >
            <div className={c.name}>{props.name}</div>
            <div className={c.quanty}>Cantidad: {props.quanty}</div>

        </div>
    )
}

export default CardDetails_list