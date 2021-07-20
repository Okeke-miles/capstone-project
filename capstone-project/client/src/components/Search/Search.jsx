import React from 'react';
import "../Search/Search.scss"

const Search = ({onChange, placeholder}) => {
    return (
      <div className="search__style">
        {/* <span className="searchspan__style">
        </span> */}
        <input
          className="search-input__style"
          type="text"
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>

    );
  };
export default Search;