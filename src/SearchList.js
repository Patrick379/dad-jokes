import React from "react";
import "./SearchList.css";

const SearchList = props =>{
    return (
        props.searchComplete && props.list.length === 0 ? <p className="jokes-list">no results found!</p>:
        <ul className="jokes-list">
            {props.list.map(item => <li key={item.id}>{item.joke}</li>)}
        </ul>);
};

export default SearchList;