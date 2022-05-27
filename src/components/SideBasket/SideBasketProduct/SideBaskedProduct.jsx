import s from "./SideBasketProduct.module.scss"
import React, { useState } from "react"

function SideBasketProduct(props) {
    /* name={elem.name} img={elem.img} price={elem.price} */

    return (

        <div className={s.basketItem}>
            <img width={90} src={props.basketProduct.img} alt='((('></img>
            <section className={s.basketItem__text}>
                <p className={s.text__title}>{props.basketProduct.name}</p>
                <p className={s.text__price}>{props.basketProduct.price} руб.</p>
            </section>
            <img className={s.text__Xmark} src='/img/Xmark.svg' onClick={() => { props.deleteFromBasket(props.basketProduct) }} alt='((('></img>
        </div>

    )
}

export default SideBasketProduct;