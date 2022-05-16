import React from "react";
import s from "./Search.module.scss";

const Search = () => {
    return (
        <div className={s.searchBlock__search}>
            <img width={20} height={20} src='/img/search.svg' alt='((('></img>
            <input placeholder='Поиск...' className={s.search__input}></input>
        </div>
    )
}

export default Search;