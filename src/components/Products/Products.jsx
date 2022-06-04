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
                    contexts.productsLoading
                        ? [...Array(8)].map((elem, index) =>
                            <Product
                                key={index}
                                self={elem}
                                loading={contexts.productsLoading}
                            />
                        )
                        : props.products
                            .filter((elem => elem.name.toLowerCase().includes(contexts.changeInput.toLowerCase())))
                            .map((elem, index) => <Product
                                key={elem.id}
                                self={elem}
                                loading={contexts.productsLoading}
                            />)
                }
            </main>
        </div>
    )
}
export default Products;