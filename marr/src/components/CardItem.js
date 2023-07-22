import React from "react";
import { useNavigate } from "react-router-dom";

const CardItem = ({ rest_id, rest_img, rest_name }) => {
  const navigate = useNavigate();
  return (
    <div className="CardItem">
      <li className="card-slide-list-item">
        <img
          className="restaurant-img"
          src={rest_img}
          onClick={() => {
            navigate(`/restaurant/${rest_id}`);
          }}
        />
        <p className="restaurant-name">{rest_name}</p>
      </li>
    </div>
  );
};

export default React.memo(CardItem);
