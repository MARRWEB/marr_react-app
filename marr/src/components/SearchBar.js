import React, { useState } from "react";

const SearchBar = () => {
  const [value, setValue] = useState("");
  return (
    <div className="SearchBar">
      <div className="search-wrapper">
        <input
          className="input-search"
          type="text"
          maxLength="50"
          placeholder="지역, 음식점 입력"
          autoComplete="off"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button className="btn-search" type="button" alt="제출버튼">
          <img src={process.env.PUBLIC_URL + `assets/icon/search_icon.png`} />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
