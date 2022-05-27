import React from "react";
import s from "./Search.module.scss";

const Search = (props) => {
    return (
        <div className={s.searchBlock__search}>
            <img width={20} height={20} src='/img/search.svg' alt='((('></img>
            <input onChange={props.search} placeholder='Поиск...' className={s.search__input}></input>
        </div>
    )
}

export default Search;