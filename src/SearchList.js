import React from "react";
import "./SearchList.css";

const SearchList = props =>{
    return<ul className="jokes-list">
        {props.list.map(item => <li key={item.id}>{item.joke}</li>)}
    </ul>;
};

export default SearchList;