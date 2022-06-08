import s from "./History.module.scss";
import React, { useContext } from "react";
import Product from "../Product/Product";
import Context from "../../Context";

function History(props) {
    const { productsLoading, history, goBack } = useContext(Context);
    return (
        <div className={s.history}>
            <div className={s.title__block}>
                <img onClick={goBack} className={s.buttonBack} src="/img/buttonBack.svg" alt="(((" />
                <p className={s.title}>Мои покупки</p>
            </div>
            <div className={s.history__products}>
                {productsLoading
                    ?//рендерится скелетон пока не загрузится инфа с сервера
                    [...Array(8)].map((elem, index) =>
                        <Product
                            key={index}
                            self={elem}
                            loading={productsLoading}
                        />)
                    : // иначе рендерится массив если он есть
                    history.length
                        ?
                        history
                            .map((elem, index) => {
                                return <Product
                                    key={index}
                                    self={elem}
                                    disabledButtons
                                />
                            }
                            )
                        :
                        <div className={s.nope_favorites}>
                            <img src="/img/semi_sad_smile.svg" alt="(((" />
                            <h2 className={s.nope_title}>Закладок нет :(</h2>
                            <p className={s.nope_text}>Оформите хотя бы один заказ.</p>
                            <button onClick={goBack} className={s.greenBtn}>
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