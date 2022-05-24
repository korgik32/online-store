import React, { useEffect, useState } from "react";
import s from "./Product.module.scss";


const Product = (props) => {
    const [plusStatus, setPlus] = React.useState(false);
    const [likeStatus, setLike] = useState(false);

    const onClickPlus = () => {
        props.onPlus(props.self)
        setPlus(!plusStatus);
    }

    const onClickLike = () => {
        setLike(!likeStatus);
    }



    return (
        <div className={s.product}>
            <img alt='(((' src={props.img} className={s.product__image}></img>
            <img className={s.like} src={likeStatus ? '/img/likes-active.svg' : '/img/likes.svg'} onClick={onClickLike} alt='((('></img>
            <div className={s.profuct__name}>{props.name}</div>
            <div className={s.product__price}>
                <section>
                    <div className={s.price__title}>Цена:</div>
                    <div className={s.price__price}>{props.price} руб.</div>
                </section>
                <img className={s.price__button} src={plusStatus ? `/img/plus-active.svg` : `/img/plus.svg`} onClick={onClickPlus} alt='((('></img>
            </div>
        </div>
    );
}

export default Product;