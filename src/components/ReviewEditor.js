import MyHeader from "./MyHeader";
import MyButton from "./MyButton";
import { useNavigate } from "react-router-dom";
import ScoreItem from "./ScoreItem";
import React, { useState, useRef, useContext } from "react";
import PhotoUploader from "./PhotoUploader";
import { RestaurantDispatchContext } from "../App";

const scoreList = [
  {
    score_id: 1,
    score_img: process.env.PUBLIC_URL + `/assets/score1.png`,
    score_discript: "맛없어 우엑",
  },
  {
    score_id: 2,
    score_img: process.env.PUBLIC_URL + `/assets/score2.png`,
    score_discript: "음..살짝 그렇네?",
  },
  {
    score_id: 3,
    score_img: process.env.PUBLIC_URL + `/assets/score3.png`,
    score_discript: "쏘쏘 이정도면",
  },
  {
    score_id: 4,
    score_img: process.env.PUBLIC_URL + `/assets/score4.png`,
    score_discript: "음~맛있다~",
  },
  {
    score_id: 5,
    score_img: process.env.PUBLIC_URL + `/assets/score5.png`,
    score_discript: "이집 개존맛",
  },
];

const ReviewEditor = () => {
  const contentRef = useRef();
  const [content, setContent] = useState("");
  const [score, setScore] = useState(3);
  const { onCreate } = useContext(RestaurantDispatchContext);
  const handleClickScore = (score) => {
    setScore(score);
  };
  const handleSubmit = () => {
    if (content.length < 1) {
      contentRef.current.focus();
      return;
    }
  };
  const curDate = new Date().getTime();
  const curstrDate = new Date(parseInt(curDate)).toLocaleDateString();
  const navigate = useNavigate();

  return (
    <div className="ReviewEditor">
      <MyHeader
        headText={"리뷰작성"}
        leftChild={<MyButton text={"<"} onClick={() => navigate(-1)} />}
      />
      <section>
        <div className="EditDate">
          <h4>리뷰 작성일</h4>
          <div>{curstrDate}</div>
        </div>
      </section>

      <section>
        <h4> 별점 </h4>
        <div className="input_score">
          {scoreList.map((it) => (
            <ScoreItem
              key={it.score_id}
              {...it}
              onClick={handleClickScore}
              isSelected={it.score_id === score}
            />
          ))}
        </div>
      </section>
      <section>
        <h4>마라탕 사진을 자랑하세요!</h4>
        <div className="input_picture">
          <PhotoUploader />
        </div>
      </section>
      <section>
        <h4>리뷰를 작성해주세요!</h4>
        <div className="input_text">
          <textarea
            placeholder="자유롭게 마라덕후의 긍지를 보여주세요"
            ref={contentRef}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
      </section>
      <section>
        <div className="control_box">
          <MyButton text={"취소하기"} onClick={() => navigate(-1)} />
          <MyButton text={"작성완료"} type={"positive"} onClick={() => {}} />
        </div>
      </section>
    </div>
  );
};

export default ReviewEditor;
