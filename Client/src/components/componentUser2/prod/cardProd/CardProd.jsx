import { useState } from 'react'
import b from './CardProd.module.css'
import ModalDetail from '../modalDetail/ModalDetail'

const CardProd = (props) => {

    const [showModal, setShowModal] = useState(false)
    // console.log(showModal);
    const handleModal = () => {
        setShowModal(!showModal)


    }

    return (
        <div className={b.prodCard} >
            <div className={b.image} onClick={() => handleModal()} >
                {props.image ? (
                    <img src={props.image} alt="image" />
                ) : (
                    <div className={b.icono}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-image" viewBox="0 0 16 16">
                            <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                            <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12" />
                        </svg>
                    </div>
                )}
            </div>

            <div className={b.bodyCard} onClick={() => handleModal()}>
                <p className={b.code}>Codigo: {props.code ? props.code : 'Codigo'}</p>
                <p className={b.price}>Precio: $ {props.price ? props.price : "precio"}</p>
            </div>
            <div>
                {showModal && <ModalDetail
                    handleModal={handleModal}
                    code={props.code}
                    name={props.name}
                    price={props.price}
                    image={props.image}
                    description={props.description}
                    supplie_type={props.supplie_type}
                    stock={props.stock}
                    id={props.id}
                />}
            </div>
        </div>
    )
}

export default CardProd







