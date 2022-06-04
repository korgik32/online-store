import s from "./SideBasket.module.scss";
import React, { useContext, useState } from "react";
import SideBasketProduct from "./SideBasketProduct/SideBaskedProduct";
import Context from "../../Context";

function SideBasket(props) {
    const contexts = useContext(Context)
    const [orderStatus, setOrderStatus] = useState(false);
    const onOrder = async () => {
        setOrderStatus(true);
        contexts.addInHistory(contexts.basketProducts)
        contexts.setBasketProducts([])
        for (let index = 0; index < contexts.basketProducts.length; index++) {
            //функция deleteFromBasket не подходит потому что в ней обновляется стейт
            try {
                await fetch(`https://628a5b66e5e5a9ad3223b0b8.mockapi.io/basket/${contexts.basketProducts[index].id}`, {
                    method: "DELETE"
                })
            } catch (error) {
                alert(error)
            }
        }
    }
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
                        : orderStatus
                            ?
                            <section className={s.orderIsProcessed}>
                                <img src="/img/orderIsProcessed.png" alt="(((" />
                                <h2><b>Заказ оформлен!</b></h2>
                                <p>Ваш заказ {`#` + contexts.orderNumber} скоро будет передан курьерской доставке</p>
                            </section>
                            :
                            <section className={s.basketEmpty}>
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
                        <button onClick={onOrder} className={s.greenBtn}>
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
        </div >
    )
}

export default SideBasket;

