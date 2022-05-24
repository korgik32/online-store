import s from "./SideBasket.module.scss";
import React from "react";
import SideBasketProduct from "./SideBasketProduct/SideBaskedProduct";

function SideBasket({ basketProducts = [], onClickClose, }) {

    return (
        <div className={s.overlay}>
            <div className={s.sideBasket}>
                <div onClick={onClickClose} className={s.sideBasket__close}>
                    <h2>Корзина </h2>
                    <img style={{ cursor: "pointer" }} src='/img/CloseBasket.svg' alt="((("></img>
                </div>
                <div className={s.flex1}>
                    {basketProducts.map(elem =>
                        <SideBasketProduct name={elem.name} img={elem.img} price={elem.price} />
                    )}


                </div>

                <div className={s.payment}>
                    <ul>
                        <li>
                            <p className={s.payment__total}>Итого:</p>
                            <div></div>
                            <p className={s.payment__price}>10000 руб.</p>
                        </li>
                        <li>
                            <p className={s.payment__total}>Скидка 5%:</p>
                            <div></div>
                            <p className={s.payment__price}>10000 руб.</p>
                        </li>
                    </ul>
                    <button className={s.greenBtn}>
                        <span>Оформить заказ</span>
                        <img src='/img/arrow.svg' alt="((("></img>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default SideBasket;