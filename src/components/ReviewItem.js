import { useNavigate } from "react-router-dom";
import MyButton from "./MyButton";
// import MyButton from "./MyButton";
// import { useCallback } from "react";
// import { ReviewDispatchContext } from "../App";
import React, { useContext } from "react";
import { RestaurantDispatchContext, RestaurantStateContext } from "../App";

const ReviewItem = ({
  id,
  level,
  date,
  content,
  score,
  store,
  marr_pic,
  profile_pic,
}) => {
  const navigate = useNavigate();
  const { storeList } = useContext(RestaurantStateContext);

  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || "";

  const strDate = new Date(parseInt(date)).toLocaleDateString();

  const goStore = () => {
    navigate(`/store-review/${store}`);
  };

  const goEdit = () => {
    navigate(`/Edit/${id}`);
  };

  const { onRemove } = useContext(RestaurantDispatchContext);

  return (
    <div className="ReviewItem">
      <div className="user_marrpic">
        <div className="user_info">
          <div
            className={["profile_pic", `profile_pic_${profile_pic}`].join(" ")}
          >
            <img
              src={process.env.PUBLIC_URL + `/assets/user${profile_pic}.png`}
            />
          </div>
          <div className="level_id">
            <div className="id">{id}</div>
            <div className="level">Level {level}</div>
          </div>
        </div>
        <div className="right_contents">
          <div className="store_btn">
            <div className="store">{store}</div>
            <div className="btn">
              <div className="delete">
                <MyButton
                  text={"삭제"}
                  type={"negative"}
                  onClick={(goEdit) => {}}
                />
              </div>
              <div className="modify">
                <MyButton
                  text={"수정"}
                  type={"positive"}
                  onClick={(goEdit) => {}}
                />
              </div>
            </div>
          </div>
          <div className={["marr_pic", `marr_pic_${marr_pic}`].join(" ")}>
            <img src={process.env.PUBLIC_URL + `/assets/marr${marr_pic}.png`} />
          </div>
          <div className="content">{content}</div>
          <div className="store_date">{strDate}</div>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
