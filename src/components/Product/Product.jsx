import React, { useContext, useEffect, useState } from "react";
import Context from "../../Context";
import s from "./Product.module.scss";
import MyLoader from "./Loading";


const Product = ({ loading, liked = false, plused = false, ...props }) => {
    const [plusStatus, setPlus] = React.useState(plused);
    const [likeStatus, setLike] = useState(liked);
    const { addInFavorites, deleteFromFavorites, favorites, addInBasket, deleteFromBasket, basketProducts } = useContext(Context)

    const onClickPlus = () => {
        let current = basketProducts?.find(elem => elem.price == props.self.price && elem.name == props.self.name && elem.img == props.self.img)
        if (current)
            deleteFromBasket(current)
        else addInBasket(props.self)
        setPlus(!plusStatus);

    }

    const onClickLike = () => {
        let current = favorites.find(elem => elem.price == props.self.price && elem.name == props.self.name && elem.img == props.self.img)
        if (current)
            deleteFromFavorites(current)
        else addInFavorites(props.self)
        setLike(!likeStatus);


    }


    return (
        <div className={s.product}>
            {loading ? <MyLoader />
                :
                <>
                    <img alt='(((' src={props.img} className={s.product__image}></img>
                    <img className={s.like}
                        src={likeStatus ? '/img/likes-active.svg' : '/img/likes.svg'}
                        onClick={() => { onClickLike() }} alt='((('></img>
                    <div className={s.profuct__name}>{props.name}</div>
                    <div className={s.product__price}>
                        <section>
                            <div className={s.price__title}>Цена:</div>
                            <div className={s.price__price}>{props.price} руб.</div>
                        </section>
                        <img className={s.price__button} src={plusStatus ? `/img/plus-active.svg` : `/img/plus.svg`} onClick={onClickPlus} alt='((('></img>
                    </div>
                </>
            }
            {/* <MyLoader></MyLoader> */}
        </div>
    );
}

export default Product;