import React from "react";
import { useNavigate } from "react-router-dom";

const SearchItem = ({ rest_id, rest_img, rest_name, rest_rating }) => {
  const navigate = useNavigate();
  return (
    <div className="SearchItem">
      <li className="search-list-item">
        <img
          className="restaurant-img"
          src={rest_img}
          onClick={() => {
            navigate(`/restaurant/${rest_id}`);
          }}
        />
        <span className="restaurant-name">{rest_name}</span>
        <span className="restaurant-rating">{rest_rating}</span>
      </li>
    </div>
  );
};

export default SearchItem;
