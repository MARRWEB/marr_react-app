import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";
import UserPage from "../components/UserPage";

import { RestaurantStateContext } from "../App";

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";
const flavor_img = process.env.PUBLIC_URL + `/assets/flavor.png`;
const meat_img = process.env.PUBLIC_URL + `/assets/meat.png`;
const spicy_img = process.env.PUBLIC_URL + `/assets/spicy.png`;

const MyPage = () => {
  const navigate = useNavigate();
  const context = useContext(RestaurantStateContext);
  const { userList } = context;

  const [flavor, setflavor] = useState();
  const handleClickRadioButton1 = (e) => {
    console.log(e.target.value);
    setflavor(e.target.value);
  };

  const [spicy, setspicy] = useState();
  const handleClickRadioButton2 = (e) => {
    console.log(e.target.value);
    setspicy(e.target.value);
  };

  const [meat, setmeat] = useState();
  const handleClickRadioButton3 = (e) => {
    console.log(e.target.value);
    setmeat(e.target.value);
  };

  return (
    <div className="Home">
      <MyHeader headText={"당신의 MARR"} />

      <UserPage />

      <div className="side">
        <MyButton
          text={"리뷰 모아보기"}
          onClick={() => navigate("/my-reviews")}
        />

        <MyButton
          text={"내가 찜한 마라"}
          onClick={() => navigate("/my-marr-places")}
        />
      </div>

      <div className="marr_type">
        <h2>나의 마라 취향</h2>
        <div className="type">
          <h3>
            향신료 <img src={flavor_img} style={{ width: "3%" }} />{" "}
          </h3>

          <label>
            <input
              type="radio"
              value="1"
              checked={flavor === "1"}
              onChange={handleClickRadioButton1}
            />
            상
          </label>
          <label>
            <input
              type="radio"
              value="2"
              checked={flavor === "2"}
              onChange={handleClickRadioButton1}
            />
            중
          </label>
          <label>
            <input
              type="radio"
              value="3"
              checked={flavor === "3"}
              onChange={handleClickRadioButton1}
            />
            하
          </label>

          <h3>
            맵기 <img src={spicy_img} style={{ width: "3%" }} />
          </h3>
          <label>
            <input
              type="radio"
              value="1"
              checked={spicy === "1"}
              onChange={handleClickRadioButton2}
            />
            상
          </label>
          <label>
            <input
              type="radio"
              value="2"
              checked={spicy === "2"}
              onChange={handleClickRadioButton2}
            />
            중
          </label>
          <label>
            <input
              type="radio"
              value="3"
              checked={spicy === "3"}
              onChange={handleClickRadioButton2}
            />
            하
          </label>

          <h3>
            고기종류 <img src={meat_img} style={{ width: "3%" }} />
          </h3>
          <label>
            <input
              type="radio"
              value="1"
              checked={meat === "1"}
              onChange={handleClickRadioButton3}
            />
            양고기
          </label>
          <label>
            <input
              type="radio"
              value="2"
              checked={meat === "2"}
              onChange={handleClickRadioButton3}
            />
            소고기
          </label>
          <label>
            <input
              type="radio"
              value="3"
              checked={meat === "3"}
              onChange={handleClickRadioButton3}
            />
            둘다
          </label>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
