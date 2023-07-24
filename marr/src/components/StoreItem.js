import React from "react";

const StoreItem = ({ id, emotion, content, date, isLiked, toggleLiked }) => {
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || "";

  const strDate = new Date(parseInt(date)).toLocaleDateString();
  return (
    <div className="StoreItem">
      <div className={["img_wrapper", `img_wrapper_${emotion}`].join(" ")}>
        <img
          className="store_img"
          src={process.env.PUBLIC_URL + `assets/myPlaces/${content}.png`}
          alt="store_img"
        />
        <button className="likebtn" onClick={toggleLiked}>
          {isLiked ? (
            <img
              src={process.env.PUBLIC_URL + `assets/myPlaces/like.png`}
              height="10%"
              width="10%"
              alt="Liked"
            />
          ) : (
            <img
              src={process.env.PUBLIC_URL + `assets/myPlaces/unlike.png`}
              height="10%"
              width="10%"
              alt="Unliked"
            />
          )}
        </button>
      </div>
      <div className="info_wrapper">
        <div className="store_name">{content.replace("_", " ")}</div>
        <div className="store_added_date">{strDate}</div>
      </div>
    </div>
  );
};

export default StoreItem;
