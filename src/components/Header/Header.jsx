import s from "./Header.module.scss";
import React, { useState } from "react";

const Header = (props) => {

    return (
        <header>
            <div className={s.header__logo}>
                <img className={s.logo__picture} alt='(((' src='/img/atm_money_cash_icon_221004.svg'></img>
                <section className={s.logo__title}>
                    <div className={s.title__title}>REACT SNEAKERS</div>
                    <div className={s.title__text}>Магазин лучших кроссовок</div>
                </section>
            </div>
            <ul className={s.header__profile}>
                <li onClick={props.onClickBasket} className={s.profile__basket}>
                    <img onClick={props.onClickBusket} src="/img/basket.svg" className={s.basket__basket}></img>
                    <div className={s.basket__price}><span>124</span>руб.</div>
                </li>
                <li>
                    <img src='/img/profile_like.svg' alt='(((' className={s.profile__likes}></img>
                </li>
                <li>
                    <img src='/img/profile.svg' className={s.profile__profile}></img>
                </li>
            </ul>

        </header>
    )
}

export default Header;