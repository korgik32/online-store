import React, { useContext } from "react";
import Context from "../../Context";
import s from "./Products.module.scss";
import Product from "../Product/Product";
import Search from "../Search/Search";
const Products = (props) => {
    const contexts = useContext(Context);
    console.log(contexts.productsLoading);
    return (
        <div>
            <div className={s.searchBlock}>
                <div className={s.searchBlock__title}>{contexts.changeInput ? `Поисик по запросу: "${contexts.changeInput}"` : "Все товары"}</div>
                <Search search={contexts.search} />
            </div>
            <main>
                {
                    contexts.productsLoading
                        ? [...Array(8)].map((elem, index) =>
                            <Product
                                key={index}
                                loading={contexts.productsLoading}
                            />
                        )
                        : props.products
                            .filter((elem => elem.name.toLowerCase().includes(contexts.changeInput.toLowerCase())))
                            .map((elem) => <Product
                                key={elem.id}
                                img={elem.img ? elem.img : null}
                                price={elem.price}
                                name={elem.name}
                                self={elem}
                                liked={Boolean(contexts.favorites.find(fElem => elem.img == fElem.img && fElem.name == elem.name && fElem.price == elem.price))}
                                plused={Boolean(contexts.basketProducts.find(bElem => elem.img == bElem.img && bElem.name == elem.name && bElem.price == elem.price))}
                                loading={contexts.productsLoading}
                            />)
                }
            </main>
        </div>
    )
}
export default Products;