import React from "react";
import { useNavigate } from "react-router-dom";

const StoreItem = ({ rest_id, rest_name, rest_img, toggleLiked }) => {
  const env = process.env;
  const navigate = useNavigate();
  env.PUBLIC_URL = env.PUBLIC_URL || "";

  return (
    <div className="StoreItem">
      <div className="img_wrapper">
        <img
          className="store_img"
          src={rest_img}
          alt="store_img"
          onClick={() => navigate(`/restaurant/${rest_id}`)}
        />
        <button className="likebtn" onClick={toggleLiked}>
          <img
            src={process.env.PUBLIC_URL + `assets/myPlaces/like.png`}
            height="10%"
            width="10%"
            alt="Liked"
          />
        </button>
      </div>
      <div className="info_wrapper">
        <div className="store_name">{rest_name.replace("_", " ")}</div>
      </div>
    </div>
  );
};

export default StoreItem;
