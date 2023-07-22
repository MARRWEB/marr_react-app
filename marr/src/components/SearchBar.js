import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  return (
    <div className="SearchBar">
      <div className="search-wrapper">
        <input
          className="input-search"
          type="text"
          maxLength="50"
          placeholder="지역, 음식점 입력"
          autoComplete="off"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button
          className="btn-search"
          type="button"
          alt="제출버튼"
          onClick={() => navigate("/search", { state: input })}
        >
          <img src={process.env.PUBLIC_URL + `assets/icon/search_icon.png`} />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
