import s from "./Header.module.scss";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Context from "../../Context";

const Header = (props) => {
    const { basketProducts } = useContext(Context);
    let totalPrice = basketProducts.reduce((prev, elem) => prev += elem.price, 0);
    return (
        <header>
            <Link style={{ textDecoration: "none" }} to="">
                <div className={s.header__logo}>
                    <img className={s.logo__picture} alt='(((' src='/img/atm_money_cash_icon_221004.svg'></img>
                    <section className={s.logo__title}>
                        <div className={s.title__title}>REACT SNEAKERS</div>
                        <div className={s.title__text}>Магазин лучших кроссовок</div>
                    </section>
                </div>
            </Link>
            <ul className={s.header__profile}>

                <li onClick={props.onClickBasket} className={s.profile__basket}>
                    <img onClick={props.onClickBusket} src="/img/basket.svg" alt="(((" className={s.basket__basket}></img>
                    <div className={s.basket__price}><span>{totalPrice}</span>руб.</div>
                </li>

                <li>
                    <Link to="Favorites"><img src='/img/profile_like.svg' alt='(((' className={s.profile__likes}></img></Link>
                </li>

                <li>
                    <Link to="History"><img src='/img/profile.svg' alt="(((" className={s.profile__profile}></img></Link>
                </li>
            </ul>

        </header >
    )
}

export default Header;