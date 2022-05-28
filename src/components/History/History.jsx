import s from "./History.module.scss";
import React, { useContext } from "react";
import Product from "../Product/Product";
import Context from "../../Context";

function History(props) {
    const { addInBasket, changeInput } = useContext(Context);
    return (
        <div className={s.history}>
            <div className={s.title__block}>
                <img className={s.buttonBack} src="/img/buttonBack.svg" alt="(((" />
                <p className={s.title}>Мои покупки</p>
            </div>
            <div className={s.history__products}>
                {props.historyProducts.length
                    ?
                    props.historyProducts
                        .filter((elem => elem.name.toLowerCase().includes(changeInput.toLowerCase())))
                        .map((elem, index) => <Product
                            key={index}
                            img={elem.img}
                            price={elem.price}
                            name={elem.name}
                            onPlus={(productData) => { addInBasket(productData) }}
                            onLike={() => alert("Лайк")}
                            self={elem}
                        />)
                    :
                    <div className={s.nope_favorites}>
                        <img src="/img/semi_sad_smile.svg" alt="(((" />
                        <h2 className={s.nope_title}>Закладок нет :(</h2>
                        <p className={s.nope_text}>Оформите хотя бы один заказ.</p>
                        <button className={s.greenBtn}>
                            <span>Вернуться назад</span>
                            {<img className={s.comeBackArrow} src='/img/backArrow.svg' alt="((("></img>}
                        </button>
                    </div>
                }
            </div>
        </div>

    )
}

export default History;