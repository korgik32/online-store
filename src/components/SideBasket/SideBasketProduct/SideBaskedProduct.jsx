import s from "./SideBasketProduct.module.scss"
import React from "react"

function SideBasketProduct() {

    return (

        <div className={s.basketItem}>
            <img width={90} src='https://placepic.ru/wp-content/uploads/2021/01/FF3mH8WjNnC2WlfFnSX34PFQycxOoEx0ViBmDS867A1Qs4DKSXt3TF2MYn0vLX7GiqgYZDBv9IU7JAx6FA3wqAAb7QWJ9yUh8QwVhux99aPsSJ7HTqAEaFt0IRIuOqsSG7CN9hQ.jpg' alt='((('></img>
            <section className={s.basketItem__text}>
                <p className={s.text__title}>Мужские Кроссовки Nike Air Max 270</p>
                <p className={s.text__price}>12 999 руб.</p>
            </section>
            <img className={s.text__Xmark} src='/img/Xmark.svg' alt='((('></img>
        </div>

    )
}

export default SideBasketProduct;