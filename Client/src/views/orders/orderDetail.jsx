import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getOrderDetail, cleanDetail } from "../../redux/actions";
import { useParams, Link, NavLink } from "react-router-dom";
import style from "./orderDetail.module.css";


const OrderDetail = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { codeOrder, stimate_date, pay, User1, Prods, ReviewGeneral } = useSelector((state) => state.orderDetail);
   console.log(ReviewGeneral);
    
    useEffect(() => {
        dispatch(getOrderDetail(id));
    
        return () => dispatch(cleanDetail());
    }, [dispatch, id]);

    return (
    
        <div className={style.contenedor}>
          
            <h1 className={style.h1}>Detalles de la Orden</h1>
            
             <div className={style.contenedor1}>
        <div className={style.bodyLeft}>
           <div className={style.div}>
                <h2 className={style.hs}>Código de orden:</h2>
                <p className={style.p}>{codeOrder}</p>
            </div>  
            <div className={style.div}>
                <h2 className={style.h2}>Entrega estimada:</h2>
                <p className={style.p}>{stimate_date}</p>
            </div>
            <div className={style.div} >
                <h2 className={style.h2}>Forma de pago:</h2>
                <p className={style.p}>{pay}</p>
            </div> 
            <div className={style.div}>
            <h2 className={style.h2}>Usuario solicitante:</h2>
            <p className={style.productList}>Nombre: {User1?.name}</p>
            <p className={style.productList}>Código: {User1?.usercode}</p>
        </div>
 
        </div>
        <div className={style.bodyRight}>
            {Prods && (
                <div>
                    <h2 className={style.h2}>Detalles de los Productos:</h2>
                    <ul className={style.productList}>
                        {Prods.map((producto, index) => (
                            <li key={index} className={style.productListItem}>
                                <p className={style.p}>Nombre: {producto.name}</p>
                                <p className={style.p}>Precio: {producto.price}</p>
                                <p className={style.p}>Cantidad: {producto.quanty}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {ReviewGeneral && ReviewGeneral.length > 0 && (
                <div>
                    <h2 className={style.h2}>Reseñas</h2>
                    <ul className={style.reviewList}>
                        {ReviewGeneral.map((review, index) => (
                            <li key={index} className={style.reviewListItem}>
                                {review.review}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            </div>
            </div>   
        </div>
    );
}

export default OrderDetail;



