import React, { useContext } from "react";
import s from "./Favorites.module.scss"
import Product from "../Product/Product";
import Context from "../../Context";
function Favorites(props) {
    const { productsLoading } = useContext(Context);
    return (
        <div className={s.favorites}>
            <div className={s.title__block}>
                <img className={s.buttonBack} src="/img/buttonBack.svg" alt="(((" />
                <p className={s.title}>Мои закладки</p>
            </div>
            <div className={s.favorites__products}>
                {productsLoading
                    ? //рендерится скелетон пока не загрузится инфа с сервера
                    [...Array(8)].map((elem, index) =>
                        <Product
                            key={index}
                            self={elem}
                            loading={productsLoading}
                        />)
                    : // иначе рендерится массив если он есть
                    props.faworiteProducts.length
                        ?
                        props.faworiteProducts
                            .map((elem) => <Product
                                key={elem.id}
                                self={elem}
                                loading={productsLoading}
                            />
                            )
                        :
                        <div className={s.nope_favorites}>
                            <img src="/img/sad-smile.svg" alt="(((" />
                            <h2 className={s.nope_title}>Закладок нет :(</h2>
                            <p className={s.nope_text}>Вы ничего не добавляли в закладки</p>
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

export default Favorites;
{
    <div className={s.nope_favorites}>
        <img src="/img/sad-smile.svg" alt="(((" />
        <h2 className={s.nope_title}>Закладок нет :(</h2>
        <p className={s.nope_text}>Вы ничего не добавляли в закладки</p>
        <button className={s.greenBtn}>
            <span>Вернуться назад</span>
            {<img className={s.comeBackArrow} src='/img/backArrow.svg' alt="((("></img>}
        </button>
    </div>
}