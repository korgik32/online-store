import React from "react";
import s from "./Product.module.scss";


const Product = () => {

    return (
        <div className={s.product}>
            <img alt='(((' src="https://placepic.ru/wp-content/uploads/2021/01/FF3mH8WjNnC2WlfFnSX34PFQycxOoEx0ViBmDS867A1Qs4DKSXt3TF2MYn0vLX7GiqgYZDBv9IU7JAx6FA3wqAAb7QWJ9yUh8QwVhux99aPsSJ7HTqAEaFt0IRIuOqsSG7CN9hQ.jpg" className={s.product__image}>

            </img>
            <button className={s.like}>
                <img src='/img/likes.svg' alt='((('></img>
            </button>
            <div className={s.profuct__name}>Мужские Кроссовки Nike Blazer Mid Suede</div>
            <div className={s.product__price}>
                <section>
                    <div className={s.price__title}>Цена:</div>
                    <div className={s.price__price}>12 999 руб.</div>
                </section>
                <img className={s.price__button} src='/img/plus.svg' alt='((('></img>
            </div>
        </div>
    );
}

export default Product;