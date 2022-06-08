import React, { useContext } from "react";
import Context from "../../Context";
import s from "./Product.module.scss";
import MyLoader from "./Loading";


const Product = ({ loading, ...props }) => {

    const { isProductLiked, isProductPlused, addInFavorites, deleteFromFavorites,
        favorites, addInBasket, deleteFromBasket, basketProducts, compareTwoProducts } = useContext(Context)
    const onClickPlus = () => {
        let current = basketProducts?.find(elem => compareTwoProducts(elem, props.self))
        if (current)
            deleteFromBasket(current)
        else addInBasket(props.self)
    }

    const onClickLike = () => {
        let current = favorites.find(elem => compareTwoProducts(elem, props.self))
        if (current)
            deleteFromFavorites(current)
        else addInFavorites(props.self)
    }

    return (
        <div className={s.product}>
            {loading ? <MyLoader />
                :
                <div className={s.product__wrapper}>
                    <img alt='(((' src={props.self.img} className={s.product__image}></img>
                    {!props.disabledButtons
                        &&
                        <img className={s.like}
                            src={isProductLiked(props.self) ? '/img/likes-active.svg' : '/img/likes.svg'}
                            onClick={() => { onClickLike() }} alt='((('>
                        </img>}
                    <div className={s.profuct__name}>{props.self.name}</div>
                    <div className={s.product__price}>
                        <section>
                            <div className={s.price__title}>Цена:</div>
                            <div className={s.price__price}>{props.self.price} руб.</div>
                        </section>
                        {!props.disabledButtons
                            &&
                            <img
                                className={s.price__button}
                                src={isProductPlused(props.self) ? `/img/plus-active.svg` : `/img/plus.svg`}
                                onClick={onClickPlus}
                                alt='((('>
                            </img>}
                    </div>
                </div>
            }
        </div>
    );
}

export default Product;