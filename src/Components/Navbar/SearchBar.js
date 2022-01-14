import React from "react";
import { FaSearch } from "react-icons/fa";
import './SearchBar.css'

const Searchbar = ()=>{
    return(
        <div className="searchbar-wrapper">
            <input type="text" className="searchbar"></input>
            <button className="search-btn"><FaSearch/></button>
        </div>
    )
}

export default Searchbar;