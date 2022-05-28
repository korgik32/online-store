import s from "./SideBasket.module.scss";
import React from "react";
import SideBasketProduct from "./SideBasketProduct/SideBaskedProduct";

function SideBasket(props) {

    return (
        <div className={s.overlay}>
            <div className={s.sideBasket}>
                <div onClick={props.onClickClose} className={s.sideBasket__close}>
                    <h2>Корзина </h2>
                    <img style={{ cursor: "pointer" }} src='/img/CloseBasket.svg' alt="((("></img>
                </div>
                <div className={s.flex1}>
                    {props.basketProducts.length ? props.basketProducts.map((elem, index) =>
                        <SideBasketProduct deleteFromBasket={props.deleteFromBasket} basketProduct={elem} key={index} />
                    )
                        : <section className={s.basketEmpty}>
                            <img src="/img/sideBasketEmpry.png" alt="(((" />
                            <h2>Корзина пустая</h2>
                            <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                        </section>
                    }
                </div>
                {props.basketProducts.length ?
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
                            <img className={s.fowardArrow} src='/img/arrow.svg' alt="((("></img>
                        </button>
                    </div>
                    :
                    <div className={s.payment}>
                        <button onClick={props.onClickClose} className={s.greenBtn}>
                            <span>Вернуться назад</span>
                            {<img className={s.comeBackArrow} src='/img/backArrow.svg' alt="((("></img>}
                        </button>
                    </div>
                }

            </div>
        </div>
    )
}

export default SideBasket;