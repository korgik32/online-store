import React, { useContext } from "react";
import Context from "../../Context";
import s from "./Products.module.scss";
import Product from "../Product/Product";
import Search from "../Search/Search";
const Products = (props) => {
    const contexts = useContext(Context);
    return (
        <div>
            <div className={s.searchBlock}>
                <div className={s.searchBlock__title}>{contexts.changeInput ? `Поисик по запросу: "${contexts.changeInput}"` : "Все товары"}</div>
                <Search search={contexts.search} />
            </div>
            <main>
                {
                    props.products
                        .filter((elem => elem.name.toLowerCase().includes(contexts.changeInput.toLowerCase())))
                        .map((elem, index) => <Product
                            key={index}
                            img={elem.img}
                            price={elem.price}
                            name={elem.name}
                            onPlus={(productData) => { contexts.addInBasket(productData) }}
                            onLike={() => alert("Лайк")}
                            self={elem}
                        />)
                }
            </main>
        </div>
    )
}
export default Products;