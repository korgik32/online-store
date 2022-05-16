import s from "./SideBasket.module.scss";
import React from "react";
import SideBasketProduct from "./SideBasketProduct/SideBaskedProduct";

function SideBasket() {
    return (
        <div className={s.sideBasket}>
            <div className={s.sideBasket__close}>
                <h2>Корзина </h2>
                <img style={{ cursor: "pointer" }} src='/img/CloseBasket.svg'></img>
            </div>
            <div className={s.flex1}>
                <SideBasketProduct />
            </div>

            <div class={s.payment}>
                <ul>
                    <li>
                        <p class={s.payment__total}>Итого:</p>
                        <div></div>
                        <p class={s.payment__price}>10000 руб.</p>
                    </li>
                    <li>
                        <p class={s.payment__total}>Скидка 5%:</p>
                        <div></div>
                        <p class={s.payment__price}>10000 руб.</p>
                    </li>
                </ul>
                <button className={s.greenBtn}>
                    <span>Оформить заказ</span>
                    <img src='/img/arrow.svg'></img>
                </button>
            </div>

        </div>
    )
}

export default SideBasket;