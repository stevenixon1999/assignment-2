import React from "react";
import "./SearchInput.css";
import { Search } from "../../assets/Icon.js";

const SearchInput = () => {
  return (
    <div className="search-container">
      <div className="search-icon">
        <div dangerouslySetInnerHTML={{ __html: Search() }}></div>
      </div>
      <input
        type="text"
        placeholder="Search for something"
        className="search-input"
      />
    </div>
  );
};

export default SearchInput;
