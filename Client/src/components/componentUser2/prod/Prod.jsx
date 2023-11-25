import x from './Prod.module.css'


const Prod = () => {
    return (
        <div className={x.prod}>
            <div className={x.header}>
                <div>Productos</div>
                <div>Agregar</div>
            </div>
            <div className={x.body}>
                <div className={x.bodyHeader}> Botonera </div>
                <div className={x.bodyCard}>
                    <div>card</div>
                    <div>card</div>
                </div>
            </div>
        </div>
    )
}

export default Prod