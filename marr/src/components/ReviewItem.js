import { useNavigate } from "react-router-dom";
// import MyButton from "./MyButton";
// import { useCallback } from "react";
// import { ReviewDispatchContext } from "../App";
import React, { useContext } from "react";
import { ReviewDispatchContext } from "../App";

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

  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || "";

  const strDate = new Date(parseInt(date)).toLocaleDateString();

  const goStore = () => {
    navigate("/StoreReview");
  };

  const goEdit = () => {
    navigate(`/Edit/${id}`);
  };

  // const { onRemove } = useContext(ReviewDispatchContext);

  return (
    <div className="ReviewItem">
      <div className="content_info">
        <div className="first_content_info">
          <div className="user_info">
            <div
              className={["profile_pic", `profile_pic_${profile_pic}`].join(
                " "
              )}
            >
              <img
                src={process.env.PUBLIC_URL + `/assets/user${profile_pic}.png`}
              />
            </div>
            <div className="level_id">
              <div className="level">Level {level}</div>
              <div className="id">{id}</div>
            </div>
          </div>
          <div className="store_date">
            <div className="store">{store}</div>
            <div className="date">{strDate}</div>
          </div>
          <div className="btn">
            <div className="delete">
              <button>삭제하기</button>
            </div>
            <div className="modify">
              <button onClick={goEdit}>수정하기</button>
            </div>
          </div>
        </div>

        <div className={["marr_pic", `marr_pic_${marr_pic}`].join(" ")}>
          <img src={process.env.PUBLIC_URL + `/assets/marr${marr_pic}.png`} />
        </div>
        <div className="content">{content}</div>
      </div>
    </div>
  );
};

export default ReviewItem;
