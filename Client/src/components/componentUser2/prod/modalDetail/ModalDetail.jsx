import { useEffect, useState } from 'react'
import m from './ModalDetail.module.css'
import axios from 'axios'
import { setProd, getProd, acceptOrder_user2 } from '../../../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'



const ModalDetail = ({ handleModal, code, name, price, image, description, supplie_type, stock, id }) => {

    const dispatch = useDispatch()
    const profile = useSelector(state => state.profile)
    console.log(profile);
    useEffect(() => {
        dispatch(getProd())
    }, [dispatch, handleModal])


    const [edit, setEdit] = useState(true)
    const [upDate, setUpDate] = useState({
        name: name,
        price: price,
        image: image,
        description: description,
        supplie_type: supplie_type,
        stock: stock,
    })

    const openEdit = () => {
        setEdit(false)
    }
    const closeEdit = async () => {
        setEdit(true);
        await setProd(id, upDate);
        handleModal();
      };



    const preset_key = "szmwmrsq";
    const cloud_name = "dvu3hvpzu";
    const URL = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`;

    function handlerUploadImage(event) {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", preset_key);
        axios.post(URL, formData)
            .then((response) => {
                setUpDate({ ...upDate, image: response.data.secure_url });
            })
            .catch((err) => alert(err));
    }

    return (
        <div className={m.modal} >
            <div className={m.modalContent}>
                <div className={m.header}>
                <div className={m.close} onClick={() => handleModal()}>❌</div>
                    <h4 className={m.pInput}>Prod cod: {code}</h4>

                </div>
                <div className={m.body}>

                    <div className={m.bodyLeft}>
                        {
                            upDate.image ? (
                                <div className={m.imageDiv}>
                                    <img src={upDate.image} alt="image" />
                                </div>

                            ) : (
                                <div className={m.imageDiv}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" fill="currentColor" class="bi bi-image" viewBox="0 0 16 16">
                                        <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                                        <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12" />
                                    </svg>
                                </div>
                            )
                        }
                        {!edit && <input disabled={edit} className={m.btnCloudinary} name="image" autoComplete="off" type="file" placeholder={image} onChange={handlerUploadImage} />}

                    </div>
                    <div className={m.bodyRight}>
                        <div className={m.infoContainer}>
                            <div className={m.divs1}>
                                <p className={m.pInput}>Nombre</p>
                                {/* <input disabled={edit} className={m.upDateText} type="text" placeholder={upDate.name} onChange={(e) => setUpDate({ ...upDate, name: e.target.value })} /> */}
                                <input disabled={edit} className={!edit ? m.upDateInput : m.upDateText} type="text" placeholder={upDate.name} onChange={(e) => setUpDate({ ...upDate, name: e.target.value })} />
                            </div>
                            <div className={m.divs1}>
                                <p className={m.pInput}>Precio</p>
                                {/* <input disabled={edit} className={m.upDateText} type="text" placeholder={upDate.price} onChange={(e) => setUpDate({ ...upDate, price: e.target.value })} /> */}
                                <input disabled={edit} className={!edit ? m.upDateInput : m.upDateText} type="text" placeholder={upDate.price} onChange={(e) => setUpDate({ ...upDate, price: e.target.value })} />

                            </div>
                            <div className={m.divs1}>
                                <p className={m.pInput}>Descripcion</p>
                                {/* <input disabled={edit} className={m.upDateText} type="text" placeholder={upDate.description} onChange={(e) => setUpDate({ ...upDate, description: e.target.value })} /> */}
                                <input disabled={edit} className={!edit ? m.upDateInput : m.upDateText} type="text" placeholder={upDate.description} onChange={(e) => setUpDate({ ...upDate, description: e.target.value })} />
                            </div>

                            <div className={m.divs1}>
                                <p className={m.pInput}>Rubro</p>
                                <input disabled={edit} className={!edit ? m.upDateInput : m.upDateText} type="text" placeholder={upDate.supplie_type} onChange={(e) => setUpDate({ ...upDate, supplie_type: e.target.value })} />
                                {/* <input disabled={edit} className={m.upDateText} type="text" placeholder={upDate.supplie_type} onChange={(e) => setUpDate({ ...upDate, supplie_type: e.target.value })} /> */}

                            </div>
                            <div className={m.divs1}>
                                <p className={m.pInput}>Stock</p>
                                <input disabled={edit} className={!edit ? m.upDateInput : m.upDateText} type="text" placeholder={upDate.stock} onChange={(e) => setUpDate({ ...upDate, stock: e.target.value })} />
                                {/* <input disabled={edit} className={m.upDateText} type="text" placeholder={upDate.stock} onChange={(e) => setUpDate({ ...upDate, stock: e.target.value })} /> */}
                            </div>

                            {!edit && <button onClick={() => closeEdit()}>Actualizar</button>}
                            {edit && <button onClick={() => openEdit()}>Editar</button>}

                        </div>


                    </div>

                </div>
            </div>
        </div>
    )
}


export default ModalDetail