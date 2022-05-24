import s from "./SideBasketProduct.module.scss"
import React from "react"

function SideBasketProduct(props) {

    return (

        <div className={s.basketItem}>
            <img width={90} src={props.img} alt='((('></img>
            <section className={s.basketItem__text}>
                <p className={s.text__title}>{props.name}</p>
                <p className={s.text__price}>{props.price} руб.</p>
            </section>
            <img className={s.text__Xmark} src='/img/Xmark.svg' alt='((('></img>
        </div>

    )
}

export default SideBasketProduct;